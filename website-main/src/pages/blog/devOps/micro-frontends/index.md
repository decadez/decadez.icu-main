---
title: 微前端
---

为了解决庞大的一整块后端服务带来的变更与扩展方面的限制，出现了微服务架构（Microservices）：

微服务是面向服务架构（SOA）的一种变体，把应用程序设计成一系列松耦合的细粒度服务，并通过轻量级的通信协议组织起来
具体地，将应用构建成一组小型服务。这些服务都能够独立部署、独立扩展，每个服务都具有稳固的模块边界，甚至允许使用不同的编程语言来编写不同服务，也可以由不同的团队来管理
然而，越来越重的前端工程也面临同样的问题，自然地想到了将微服务思想应用（照搬）到前端，于是有了「微前端（micro-frontends）」的概念：

Micro frontends, An architectural style where independently deliverable frontend applications are composed into a greater whole.
即，一种由独立交付的多个前端应用组成整体的架构风格。具体的，将前端应用分解成一些更小、更简单的能够独立开发、测试、部署的小块，而在用户看来仍然是内聚的单个产品：

Decomposing frontend monoliths into smaller, simpler chunks that can be developed, tested and deployed independently, while still appearing to customers as a single cohesive product.

## 特点
简单来讲，微前端的理念类似于微服务：

In short, micro frontends are all about slicing up big and scary things into smaller, more manageable pieces, and then being explicit about the dependencies between them.
将庞大的整体拆成可控的小块，并明确它们之间的依赖关系。关键优势在于：

代码库更小，更内聚、可维护性更高
松耦合、自治的团队可扩展性更好
渐进地升级、更新甚至重写部分前端功能成为了可能

简单、松耦合的代码库
比起一整块的前端代码库，微前端架构下的代码库倾向于更小/简单、更容易开发

此外，更重要的是避免模块间不合理的隐式耦合造成的复杂度上升。通过界定清晰的应用边界来降低意外耦合的可能性，增加子应用间逻辑耦合的成本，促使开发者明确数据和事件在应用程序中的流向
