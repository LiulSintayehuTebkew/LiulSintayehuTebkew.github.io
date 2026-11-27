---
title: "How Email Works & Email Security"
date: 2026-08-21
description: "A walkthrough of how email travels from client to server, how DNS, TCP, and TLS fit in, and how SPF, DKIM, and DMARC help protect inboxes."
category: cybersecurity
tags: [Email Security, Phishing, Spoofing, SPF, DKIM, DMARC]
---

## 1. How does Email Work? Abstract level

Let’s say you want to send an email to your friend. This is what happens, step by step. The message starts from your Gmail application on your phone, travels across different devices like DNS and mail servers through the internet, and finally reaches your friend’s Gmail application.

Key words:

- Gmail application = the client
- Mail server = the server

Explanation:

1. You send your message via the Gmail application to your mail server.
2. Your mail server sends a DNS query to find your friend’s mail server address.
3. The DNS server sends back the information needed to locate your friend’s mail server.
4. Your mail server sends the email to your friend’s mail server.
5. Your friend’s Gmail application fetches the message from the mail server.

## 2. “Low-Level” Explanation

1. Your phone starts a 3-way TCP handshake: SYN, SYN-ACK, ACK.
2. A TLS handshake starts, negotiating the encryption key and algorithm.
3. The application layer protocol sends the message inside the encrypted tunnel.
4. A DNS request is sent via UDP port 53, since DNS is connectionless.
5. The DNS server responds with the Mail Exchange (MX) record containing the location of the destination server.
6. Your mail server starts a 3-way TCP handshake with your friend’s mail server.
7. Your mail server negotiates the encryption key and algorithm with the friend’s server.
8. The application layer message — the real content — is sent inside the encrypted tunnel.
9. Your friend’s phone starts a 3-way TCP handshake with their mail server.
10. A TLS handshake establishes the secure tunnel.
11. Your friend’s phone synchronizes the received message across all devices using IMAP, or downloads the message and deletes it from the mail server using POP3.

## 3. Email Security

For simplicity, the TCP and TLS steps can be abstracted as a lock icon representing a secured connection.

1. You send the email securely.
2. Your mail server queries the DNS server for the location of your friend’s mail server.
3. The DNS server responds with the Mail Exchange (MX) record used to locate the destination server.
4. Your mail server forwards the email securely to your friend’s mail server.
5. Your friend’s mail server checks the security of the email and filters it.
6. Your friend’s client application receives the email and stores it in the inbox.

### The security check part

- **SPF** checks whether the server is allowed to send this email.
- **DKIM** checks whether the email has a digital signature and whether it was modified.
- **DMARC** decides what to do if SPF or DKIM fails, and compares the two “From” addresses.

DMARC policies:

- `p=none` — accept
- `p=quarantine` — send to spam
- `p=reject` — reject

These three technologies provide authentication and prove that the sender actually owns or controls the domain.

For example, if an attacker uses `attacker@company[.]com` to send emails, the receiving server checks the SPF records for `company[.]com` to confirm the allowed list of IP addresses. If the sender’s IP address is not on that list, the SPF check fails.

There is another issue: attackers can use different “From” addresses. There are two important “From” addresses in email systems: the **Envelope From** address and the **Header From** address. To bypass SPF, an attacker can use their own Envelope From address, such as `attacker@attackers[.]com`, and a spoofed Header From address like `Administrator@company[.]com`. The recipient only sees `Administrator@company[.]com` in the inbox, while the actual envelope sender is the attacker’s domain. Because the attacker controls that domain, the SPF check passes.

That is why SPF alone is not enough and DMARC is needed.

**DMARC:**

1. Checks alignment — whether the domain in the visible “From” address matches the domain authenticated by SPF and/or DKIM.
2. Applies the policy — what the receiving server should do when SPF and DKIM fail.

**DKIM** helps check whether the email was modified after it was sent by using digital signatures.

## 4. Different categories of Email Attacks

The email security controls above provide authentication and show that the sender owns or controls the domain. They do not protect individuals from every kind of attack. That is why additional layers such as spam detection, phishing detection, and malware analysis are also needed.

### 1. Phishing attacks

- **Spear phishing** — targeting employees individually
- **Whaling** — targeting very important employees
- **Vishing** — carried out over the phone
- **Smishing** — carried out via text message

### 2. Email spoofing and impersonation attacks

- **Email address spoofing** — the email appears to come from a different sender
- **Domain spoofing** — the email appears to come from a trusted domain
- **Display-name spoofing** — changing the visible sender name
- **Business Email Compromise (BEC)** — using compromised employee accounts to trick other employees

### 3. Malicious content attacks

- **Malicious attachments** — files used to steal sensitive information
- **Malicious links** — links that redirect to phishing pages
- **Malware delivery** — delivering malware such as ransomware through email

### 4. Credential and account attacks

- **Credential harvesting** — deceiving people into giving their credentials through phishing

### 5. Email infrastructure attacks

- **Mail server attacks** — exploiting misconfigurations in servers
- **DNS and email routing attacks** — abusing protocol-level communication to redirect users to malicious destinations
