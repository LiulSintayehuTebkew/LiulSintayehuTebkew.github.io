---
title: Salesforce Project Management
date: 2026-11-27T03:00:00+00:00
description: "A Salesforce project management app for tracking projects, tasks, ownership, status, and overdue work with dashboards."
categories: [salesforce]
tags: [Salesforce, Project Management, Lightning, Custom Objects, Flow, Dashboards]
---

## Overview

A project management workspace built on Salesforce to plan work, assign ownership, and track delivery status without leaving the CRM. The app gives project leads a portfolio view while keeping task-level detail available to the people doing the work.

## What I Built

- **Project Management app** — a dedicated Lightning application with custom tabs for Projects and Project Tasks.
- **Custom data model** — `Project__c` and `Project_Task__c` with relationships, status fields, owners, and due dates.
- **Automation** — a scheduled Flow that checks for overdue tasks and keeps owners informed, plus validation rules to protect critical fields.
- **Reporting** — `Project_Portfolio` and `Project_Task_Tracking` report types and a `Project_Tasks_by_Status` report for status tracking.
- **User experience** — purpose-built Lightning pages and layouts for project and task records.

## Objectives

- Centralize project and task tracking in Salesforce.
- Make ownership, deadlines, and status visible at a glance.
- Reduce manual follow-up with automated overdue-task monitoring.

## Technologies

- Salesforce DX and Salesforce CLI
- Lightning apps, pages, and custom tabs
- Custom objects and master-detail relationships
- Scheduled Flows and validation rules
- Reports, report types, and dashboards

## Salesforce Trailblazer

[View my Salesforce Trailblazer profile](https://www.salesforce.com/trailblazer/profile)
