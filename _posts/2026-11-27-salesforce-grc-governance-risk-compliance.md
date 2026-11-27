---
title: Salesforce GRC Governance, Risk, and Compliance
date: 2026-11-27T04:00:00+00:00
description: "A Salesforce GRC app linking frameworks, controls, risks, audits, findings, evidence, and remediation in one place."
categories: [salesforce]
tags: [Salesforce, GRC, Governance, Risk, Compliance, Audit, Flow]
---

## Overview

A Governance, Risk, and Compliance application built on Salesforce. It connects frameworks and requirements to controls, risks, audits, evidence, and remediation so compliance work can be tracked end to end in one system.

## What I Built

- **GRC Management app** — a Lightning application with tabs for each area of the compliance program.
- **Connected data model** — custom objects for Frameworks, Requirements, Controls, Risks, Policies, Audits, Control Tests, Findings, Evidence, and Remediation.
- **Junction objects** — `Risk_Control__c` and `Requirement_Control__c` to model many-to-many relationships between controls, risks, and requirements.
- **Automation** — Flows that notify managers about high risks, create a Finding when a control test fails, and send rejected findings back to their owners.
- **Reporting** — a dedicated GRC dashboard folder and a `GRC_Findings_with_Remediation` report type for tracking open issues.

## Objectives

- Model a realistic GRC program using native Salesforce objects and relationships.
- Automate escalation and remediation workflows.
- Give stakeholders dashboards for findings, controls, and risk status.

## Technologies

- Salesforce DX and Salesforce CLI
- Custom objects and junction objects
- Record-triggered Flows
- Validation rules and page layouts
- Reports, report types, and dashboards

## Salesforce Trailblazer

[View my Salesforce Trailblazer profile](https://www.salesforce.com/trailblazer/profile)
