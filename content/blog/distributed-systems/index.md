---
title: Brief Introduction to Distributed Systems
date: "2022-06-20T22:12:03.284Z"
description: "An introduction to distributed systems"
---

## What are distributed systems?

Definition:
A distributed system is a system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages to one another from any system. The components interact with one another in order to achieve a common goal. 

Let's break this down. What can be the components of a distributed system? Computers, physical servers, virtual machines, containers, or any other node that can connect to the network, have local memory, and communicate by passing messages. 
What do these components do? They communicate and coordinate with each other to appear as a single coherent system to the end-user. 

<!-- These machines have a shared state, operate concurrently and can fail independently without affecting the whole system’s uptime. -->

Three characteristics of a distributed system are:
1. Maintaining **concurrency** of components 
2. Manage **independent failures** of components
3. Overcome **lack of global clock** (components have independent clocks)

The opposite of a distributed system is a centralized system, i.e. if all of the components of a computing system reside in one machine.

Example: In a centralized system, database is stored in a single system. So when a user sends/requests information, it communicates with that machine directly. In a distributed system, there are multiple database files stored in different nodes which require time for synchronization (though this assures fault tolerance, it can cause data inconsistancy due to duplication of data). So when a user sends/requests information, any of the system's nodes should be able to respond (inserts a record into node#1, node#2 and node#3 must be able to return that record).
<!-- a database can be homogenous (where each system shares a data model) or heterogenous (where databases make it possible to have multiple data models). -->

## How do they work?

The distributed system breaks down a task into pieces and each pieces of the task is taken by available nodes to process. Once a node is done with it's own sub-task, it can work on another piece of the task. All the nodes report their finished job which is combined and sent back to the user. When a system has thousands of nodes, a task - which could've taken days to complete by a centralized system - executes in few minutes.  

Some basic architecture models of distributed systems:

1. **Client-server** -  Clients contact the server for data, then format it and display it to the end-user. The end-user can also make a change from the client-side and commit it back to the server to make it permanent.

2. **Three tier** - Information about the client is stored in a middle tier rather than on the client to simplify application deployment. Mostly common in web appliactions.

3. **n-tier** - Generally used when an application or server needs to forward requests to additional enterprise services on the network.

4. **Peer-to-peer** - There are no additional machines used to provide services or manage resources. Responsibilities are uniformly distributed among machines in the system, known as peers, which can serve as either client or server.

<!-- Add an image -->

## Why build a distributed system?

Distributed systems offer better:
1. Scalability
2. Availability
3. Durability 
4. Performance

<!-- ## Key Characteristics  -->

### Scalability

> It is the ability of a system, network, or process, to handle a growing amount of work in a capable manner or its ability to be enlarged to accommodate that growth.

### Availability

> It is the proportion of time a system is in a functioning condition. If a user cannot access the system, it is said to be unavailable. 


**Fault tolerance:** ability of a system to behave in a well-defined manner once faults occur 

### Performance

> It is characterized by the amount of useful work accomplished by a computer system compared to the time and resources used.

To achieve one or more of these:
- Short response time/low latency for a given piece of work
- High throughput (rate of processing work)
- Low utilization of computing resource(s)

**Latency:** The state of being latent. Delay, a period between the initiation of something and the occurrence.
<!-- ### Serviceability or Manageability -->


<!-- ## Challenges of distributed systems -->


<!-- 
## Storage
CAP and stuff

## Computation

## Messaging
-->


If you find an error in concepts explained above, please raise an issue here.

## Further Reading

- https://gousios.org/courses/bigdata/dist-systems-intro.html
- [Distributed Systems for fun and profit](http://book.mixu.net/distsys/single-page.html) 
- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) 
- [Distributed Systems in One Lesson by Tim Berglund](https://www.youtube.com/watch?v=Y6Ev8GIlbxc) 
