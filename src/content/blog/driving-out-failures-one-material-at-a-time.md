---
title: "Driving Out Failures, One Material at a Time"
description: "Most organizations fail to connect supply chain management with maintenance through their ERP. A four-step process for using failure cause mapping and SAP to drive out defects — one material at a time."
publishedAt: 2024-05-08
author: Justin Lester
tags: [reliability, SAP, failure codes, maintenance]
---

During an inventory count at an oil and gas company, the discovery of forgotten cylinder rings sparked a question: why do organizations hold excess inventory? The answer led to learning about failure cause mapping from reliability engineers — and a realization that most organizations simply don't understand what they already own.

Many organizations fail to connect supply chain management with maintenance operations through standard ERP functionality. Most people just don't understand what they already own, highlighting a widespread gap in leveraging SAP's built-in capabilities.

## The Playbook: Four-Step Process

### 1. Work Notification — Identify and Record Failures

Capture failure information using standardized fields:

- **What Failed?** Specific equipment record
- **Priority:** Based on impact to people, environment, production, and reputation
- **Why?** Using failure codes with four categories:
  - Object Part (component that failed)
  - Damage (what was wrong with it)
  - Cause (filled after work completion)
  - Activity (repair action taken)

### 2. Work Orders — Plan, Schedule, Execute

The critical step many organizations skip: adding parts with material numbers rather than free text requisitions.

**"FREE TEXT REQUISITIONS WILL DESTROY YOUR RELIABILITY PROGRAM!"**

Proper workflow:
1. Create work order from notification
2. Add parts with material numbers
3. Complete failure codes after repair

### 3. Analyze Failure Data

Organizations can identify patterns across locations using standard SAP reports. Example: discovering that ten impeller failures across ten locations shared identical causes (corrosion) and the same manufacturer.

### 4. Connect Supply Chain

Armed with failure data, procurement teams can make informed decisions about vendors, specifications, and quality control measures.

## Getting Started: Five Recommendations

1. **Keep it Simple** — Focus on critical equipment initially
2. **Make Data Relevant** — Establish regular reviews of failure codes and unplanned spending
3. **Create Equipment-Specific Failure Code Catalogs** — Reference ISO 14224 as a foundation
4. **Utilize Technology to Enforce Processes** — Configure SAP to require failure codes before completion
5. **Understand Master Data Architecture** — Ensure proper organization of Material Masters, Purchasing Info Records, Source Lists, and Bills of Materials

**NOW GO ELIMINATE SOME DEFECTS!**
