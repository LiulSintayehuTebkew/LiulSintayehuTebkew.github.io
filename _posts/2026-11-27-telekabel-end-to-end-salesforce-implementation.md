---
title: Telekabel End-to-End Salesforce Implementation
date: 2026-11-27T05:00:00+00:00
description: "End-to-end Salesforce implementation for a telecom provider: sales, service, subscriptions, installations, automation, and reporting."
categories: [salesforce]
tags: [Salesforce, Telekabel, Sales Cloud, Service Cloud, Lightning, Flow]
---

## Overview

An end-to-end Salesforce implementation for Telekabel, a telecom provider, covering the customer lifecycle from opportunity and subscription through installation, support, and reporting.

## What I Built

- **Sales and service apps** — `Telekabel_Sales` and `Telekabel_Service_Console`, with dedicated Lightning record pages for Accounts, Cases, Subscriptions, and Installation Requests.
- **Custom data model** — `Telekabel_Subscription__c` and `Installation_Request__c` connected to standard Opportunities, Cases, and Assets.
- **Process automation** — a Flow that creates a Subscription when an Opportunity is Closed Won, a Flow that creates an Installation Request from a Subscription, and Flows that prioritize email Cases and notify owners of high-priority Cases.
- **Reporting** — Telekabel sales pipeline, active subscriptions, open cases, and installation worklist reports with report types for each area.
- **Access model** — separate Sales, Service, and Marketing profiles and page layouts tailored to each team.

## Objectives

- Design a Salesforce data model that connects sales, provisioning, and support.
- Automate hand-offs between teams instead of relying on manual record creation.
- Give each role a focused Lightning experience and useful reporting.

## Technologies

- Lightning App Builder and Lightning record pages
- Custom objects, fields, and relationships
- Record-triggered and scheduled Flows
- Reports, report types, and dashboards
- Apex and SOQL for demo data seeding

## Salesforce Trailblazer

<a href="https://www.salesforce.com/trailblazer/profile" target="_blank" rel="noopener noreferrer">View my Salesforce Trailblazer profile</a>
