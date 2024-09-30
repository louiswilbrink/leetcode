# The Network Group



### <u>Platform</u>

#### Features

#### Schema

#### API

#### Architecture Diagram

#### Cost, Schedule, Roadmap



















## Features



- System automates most or all of the steps found in the LEP flowchart, including:

  

  - Identifying the IMB owner using Google Maps, SoS, Open Corporates, CLEAR, and business tax records.
  - Identifying Building Property LLC & owner using GIS mapping, SoS & CLEAR.

  

- System compiles each IMB investigation into `cases` that can be viewed by The Network team or law enforcement. (`cases` are the collection of invesigation details surrounding an IMB.  These are arguable going to be our most important platform export since they encapsulate our multi-stage internal investigation before we share with LEOs).



- System allows administrators the ability to search cases by related details.



- System notifies parties through email & text when investigation tasks are complete.



- System implements a robust user management system that places the utmost importance on security, while also being flexible enough to share `case` links with external partners (like law enforcement).



## Schema



https://prisma-editor.vercel.app/schema/9415



## API



| Endpoint                             | Function                                   |
| ------------------------------------ | ------------------------------------------ |
| `GET /api/v1/case`                   | Retrieve all cases                         |
| `POST /api/v1/case`                  | Create a new case                          |
| `GET /api/v1/case/[id]`              | Retrieve case details                      |
| `PATCH /api/v1/case/[id]`            | Update case details                        |
| `GET /api/v1/imb`                    | Retrieve all IMBs                          |
| `POST /api/v1/imb`                   | Create a new IMB                           |
| `GET /api/v1/imb/[id]`               | Retrieve IMB details                       |
| `PATCH /api/v1/imb/[id]`             | Update IMB details                         |
| `GET /api/v1/imb-owner`              | Retrieve all IMB owners                    |
| `POST /api/v1/imb-owner`             | Create a new IMB owner                     |
| `GET /api/v1/imb-owner/[id]`         | Retrieve IMB owner details                 |
| `PATCH /api/v1/imb-owner/[id]`       | Update IMB owner details                   |
| `GET /api/v1/building-owner`         | Retrieve all building owners               |
| `POST /api/v1/building-owner`        | Create a new building owner                |
| `GET /api/v1/building-owner/[id]`    | Retrieve building owner details            |
| `PATCH /api/v1/building-owner/[id]`  | Update building owner details              |
| `GET /api/v1/building-llc`           | Retrieve all building LLC entities         |
| `POST /api/v1/building-llc`          | Create a new building LLC entity           |
| `GET /api/v1/building-llc/[id]`      | Retrieve building LLC details              |
| `PATCH /api/v1/building-llc/[id]`    | Update building LLC details                |
| `GET /api/v1/sos-record`             | Retrieve all Secretary of State records    |
| `POST /api/v1/sos-record`            | Create a new Secretary of State record     |
| `GET /api/v1/sos-record/[id]`        | Retrieve Secretary of State record details |
| `PATCH /api/v1/sos-record/[id]`      | Update Secretary of State record details   |
| `GET /api/v1/open-corporates`        | Retrieve all Open Corporates reports       |
| `POST /api/v1/open-corporates`       | Create a new Open Corporates report        |
| `GET /api/v1/open-corporates/[id]`   | Retrieve an Open Corporates report details |
| `PATCH /api/v1/open-corporates/[id]` | Update an Open Corporates report details   |
| `GET /api/v1/clear`                  | Retrieve all CLEAR reports                 |
| `POST /api/v1/clear`                 | Create a new CLEAR report                  |
| `GET /api/v1/clear/[id]`             | Retrieve a CLEAR report details            |
| `PATCH /api/v1/clear/[id]`           | Update a CLEAR report details              |
| `POST /api/v1/task/queue-task`       | Queue an investigation task                |



##### Routes



| **Routes**      | URL          |
| --------------- | ------------ |
| Cases           | `/case`      |
| Individual Case | `/case/[id]` |
| IMBs            | `/imb`       |
| Individual IMB  | `/imb/[id]`  |
| Login           | `/login`     |
| Logout          | `/logout`    |



## System Design



https://excalidraw.com/#json=APKvkhhiKG3QnvxaU5JoT,GJZFSWFrMyx2csTOEyJzLg



A couple quick things: blue boxes represent services, while yellow diamonds represent vendor platforms that we're interacting with.



As you can tell from the diagram, our platform is following a **Service Oriented Architecture**.  We are coordinating a lot of different data sources and silo-ing them into responsible services helps to organize our codebase and keeps things maintainable.



Some of these services are very simple and mostly implement CRUD operations (like the "Case" or "IMB" service).  Other services are responsible for interacting with vendor platforms, like the CLEAR service or Open Corporates service.  These services are dedicated to bringing in vendor platform data, and saving it to our database.



This is a good time to walk through how the LEP Process document will actually be automated by the platform: we saw in our API that our system can queue up LEP tasks like generating a CLEAR report on a building owner/landlord.  A "task" request hits the API Gateway, which adds a message to the event queue with task details.  When a worker is available, it will take the message from the queue and call the CLEAR service to generate a report for the individual.  The CLEAR report is saved to our Postgres database, which will ultimately enrich our most critical platform export: "Cases".



This is why **Event Driven Architecture** is really useful.  We have a multi-step procedure that runs asynchronously and can also take a long time.  We don't want a client request to hang and wait forever for a CLEAR report to generate.  We need to break that process up so that any step can be retried if it fails, and we have a running log of the progress.  If the service fails, or there's an outage at CLEAR, EDA maintains our state in between our cloud infrastructure by inscribing the task's progress  in the event queue.



So with the event queue and domain-specific services, we have a way to automate each step of the LEP Process document.  But we're not done yet.  The platform will be capable of automatically investigating hundreds or even thousands of IMBs in a very short matter of time.  Our platform needs a way to search and display the case we want to view instantly.  This is where ElasticSearch comes in.



**ElasticSearch** is a common search-optimized database.  It takes all of our data, and creates an inverted index so that we can search for terms related to an IMB or case, not just the `case` ID itself.  In the diagram, you can see some examples of the search queries that you can do: Search the location of a case, or the business owner's name, or the name of the law enforcement agency that the case has been shared with.  This allows our team to naturally explore our data quickly (while also avoiding expensive table scans).



And speaking of sharing `case` data with law enforcement, the `Auth` service will be able to intelligently gate the `/case` route so that only internal users or specific external partners can access the page.



Lastly, since there is so much investigation work occurring asynchronously, having a notification system will allow us to monitor the progress of each IMB investigation, and review it when all steps have been completed.



## Tech Stack



- React & Tailwind

- Express

- TypeScript

- Postgres

- Neon

- ElasticSearch

- Simple Queue Service or Kafka

- Simple Notification Service

- Render/AWS

  

## Costs, Estimations, Roadmap



##### 12-month costs



|           Item           |    Amount    |
| :----------------------: | :----------: |
|     Product Designer     |   $50,000    |
| Staff Software Engineer  |   $80,000    |
| Server costs (12 months) |   $35,400    |
|        **Total**         | **$165,400** |



##### Server cost breakdown



|  Item  | Amount (per month) |
| :----: | ------------------ |
| Render | $500               |
| Auth0  | $750               |
|  Neon  | $500               |
| Figma  | $300               |
|  LLM   | $600               |
| Github | $300               |



##### Estimations



| Task                                     | Size                         |
| ---------------------------------------- | ---------------------------- |
| Authentication + User management         | 3 weeks                      |
| Test environments + Deployment pipelines | 1 week                       |
| Application Infrastructure + Routing     | 1 week                       |
| Event Queue + Worker                     | 2 weeks                      |
| Services - Case & IMB (CRUD)             | 1 week                       |
| Services - CLEAR                         | 3 weeks                      |
| Services - Secretary of State            | 4 weeks                      |
| Services - Google Maps                   | 3 weeks                      |
| Services - Open Corporates               | 3 weeks                      |
| Services - Lenders                       | 4 weeks                      |
| Services - Search                        | 4 weeks                      |
| Services - Notification                  | 2 weeks                      |
| **Total**                                | **31 weeks  or 7.75 months** |



## Conclusion



In conclusion, this platform spec details the robust and efficient solution that will achieve the automation goal set forth by The Network Group.  The platform is able to perform all of the investigation tasks summarized in the LEP process document, while also adding search and sharing capabilities.



The estimated cost is roughly half of the budget, and delivery is optimistically slated for H1 of 2025.





















































## Novel solutions



- Create a web scraping script for each Secretary of State website.
- Anomaly 6 - Provides geofenced cell data.
- Costar - ascertain building ownership.
- Use multiple GIS & Mapping platforms (HERE, Uber/Lyft)



## Questions



How would you like to trigger each step of the LEP process?  Buttons or full-automation?



