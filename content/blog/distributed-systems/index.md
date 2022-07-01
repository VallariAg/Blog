---
title: Brief Introduction to Distributed Systems
date: "2022-06-20T22:12:03.284Z"
description: "An introduction to distributed systems - what, how, and why. "
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
2. Reliability
3. Availability
4. Performance

<!-- ## Key Characteristics  -->

### Scalability

> It is the ability of a system, network, or process, to handle a growing amount of work in a capable manner or its ability to be enlarged to accommodate that growth.

A distributed system that can support growing amount of work is scalable. Systems need to scale for many reasons like increased data volume or increased work. 

Distributed systems allows you to scale horizontally. **Horizontal scaling** means that you scale by adding more servers into your pool of resources, whereas **Vertical scaling** means that you scale by adding more power (CPU, RAM, Storage, etc.) to an existing server. Vertical scaling has a limit to the capacity of a server to evolve. Example for horizontal scaling is **Cassandra** and **MongoDB**, and vertical scaling is simpling moving the resources to a larger server.

###  Reliability

> It is the probability a system will fail in a given period.

A distributed system is considered reliable if it keeps delivering its services even when one or several of its software or hardware components fail. This means that if one of the node is down, the resources stored in that node can be available by one of the other nodes - ensuring there is no single point of failure. 

The cost of such reliable behaviour is **redundancy**, and going extra steps to ensure the redundant data is synchronized to maintain a state of data across all copies. 

### Availability

> It is the proportion of time a system is in a functioning condition. If a user cannot access the system, it is said to be unavailable. 
  

A single machine cannot tolerate any failures since it either fails or doesn't. Distributed systems can take a bunch of unreliable components, and build a reliable system on top of them.

Availability from a technical perspective is mostly about being fault tolerant. **Fault tolerance** is the ability of a system to behave in a well-defined manner once faults occur.

How is reliability different from availability?
Reliability is availability over time, considering the full range of possible real-world conditions that can occur.


### Performance

> It is characterized by the amount of useful work accomplished by a computer system compared to the time and resources used.

Performace is to achieve one or more of the following:
- Short response time/low latency for a given piece of work
- High throughput (rate of processing work)
- Low utilization of computing resource(s)

Two standard measures of its performance are **latency** (response time) - that denotes the delay to obtain the first item - and the **throughput** (or bandwidth), which denotes the number of items delivered in a given time unit (e.g., a second). 

<!-- ### Serviceability or Manageability -->


<!-- ## Challenges of distributed systems -->


<!-- 
## Storage
CAP and stuff

## Computation

## Messaging
-->

---
This is just a brief introduction to distributed systems, if you want to further explore and understand them then please refer to the "Further Readings" section below for few resources to expland knowledge on the topic. If you find an error in concepts explained above, please raise an issue [here](https://github.com/VallariAg/Blog/issues/new).

## Further Readings

References banks created for understanding distributed systems:
- [Collection of bazillions of resources](https://github.com/theanalyst/awesome-distributed-systems)
- [Papers on Distributed systems](http://muratbuffalo.blogspot.com/2021/02/foundational-distributed-systems-papers.html)

Articles:
- [Everything-to-know-about-distributed-systems](https://dev.to/mukulalpha/system-design-101-everything-to-know-about-distributed-systems-2hd6)
- [Thorough-introduction-to-distributed-systems](https://www.freecodecamp.org/news/a-thorough-introduction-to-distributed-systems-3b91562c9b3c/amp/)
- [Notes - Introduction to Distributed systems](https://gousios.org/courses/bigdata/dist-systems-intro.html)

Youtube:
- [Distributed Systems in One Lesson by Tim Berglund](https://www.youtube.com/watch?v=Y6Ev8GIlbxc)

Books:
- [Distributed Systems for fun and profit](http://book.mixu.net/distsys/single-page.html) [Free]
- [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) [Free] 

