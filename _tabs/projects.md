---
title: Projects
icon: fas fa-diagram-project
order: 2
permalink: /projects/
shell: false
---

<div class="container">
  <header class="page-head">
    <p class="eyebrow">CYBERSECURITY PORTFOLIO</p>
    <h1>Cybersecurity Projects</h1>
    <p>Hands-on work focused on security monitoring, investigation, and detection engineering. Open each repository to explore its implementation and documentation.</p>
  </header>

  <div class="filters" role="group" aria-label="Filter projects by category">
    <button class="filter-btn" type="button" data-filter="all" aria-pressed="true">All projects</button>
    {% for category in site.portfolio_categories %}
      <button class="filter-btn" type="button" data-filter="{{ category.slug }}" aria-pressed="false">{{ category.name }}</button>
    {% endfor %}
  </div>

  <div class="grid grid-2" data-filter-target>
    <article class="card" data-categories="cybersecurity ai-security security-operations">
      <p class="card-meta"><span class="chip chip-accent">Security Operations &amp; AI</span></p>
      <h3><a href="https://github.com/LiulSintayehuTebkew/ai-soc-investigation-platform" target="_blank" rel="noopener noreferrer">AI SOC Investigation Platform ↗</a></h3>
      <p>An AI-assisted SOC investigation project that brings alert data into an investigation workflow and helps organize analysis into incident reports.</p>
      <p><strong>Focus:</strong> SOC workflows · Alert investigation · Python · Local LLM integration</p>
      <ul class="chip-list"><li class="chip">AI</li><li class="chip">SOC</li><li class="chip">Splunk</li><li class="chip">Incident Response</li></ul>
    </article>

    <article class="card" data-categories="cybersecurity security-operations threat-detection detection-engineering">
      <p class="card-meta"><span class="chip chip-accent">Detection Engineering</span></p>
      <h3><a href="https://github.com/LiulSintayehuTebkew/active-directory-attack-detection-with-splunk" target="_blank" rel="noopener noreferrer">Active Directory Attack Detection with Splunk ↗</a></h3>
      <p>A hands-on detection lab focused on monitoring Windows and Active Directory activity with Splunk.</p>
      <p><strong>Focus:</strong> SIEM · Windows event logs · Active Directory · Detection engineering</p>
      <ul class="chip-list"><li class="chip">Active Directory</li><li class="chip">Splunk</li><li class="chip">Sysmon</li><li class="chip">Threat Detection</li></ul>
    </article>

    <article class="card" data-categories="cybersecurity ai-security email-security">
      <p class="card-meta"><span class="chip chip-accent">AI for Security</span></p>
      <h3><a href="https://github.com/LiulSintayehuTebkew/ai-powered-phishing-email-analyzer" target="_blank" rel="noopener noreferrer">AI-Powered Phishing Email Analyzer ↗</a></h3>
      <p>An AI-powered application designed to analyze suspicious phishing emails, identify potential threats, and assist in understanding malicious email content.</p>
      <p><strong>Focus:</strong> Phishing analysis · Email security · Python · Local LLM integration</p>
      <ul class="chip-list"><li class="chip">AI</li><li class="chip">Phishing</li><li class="chip">Email Security</li><li class="chip">Ollama</li></ul>
    </article>

    <article class="card" data-categories="cybersecurity network-security threat-detection">
      <p class="card-meta"><span class="chip chip-accent">Network Security</span></p>
      <h3><a href="https://github.com/LiulSintayehuTebkew/malware-traffic-analysis-with-wireshark-compilation" target="_blank" rel="noopener noreferrer">Malware Traffic Analysis with Wireshark ↗</a></h3>
      <p>A collection of practical malware traffic analysis exercises focused on examining network traffic, identifying suspicious communication patterns, and understanding potentially malicious network activities using Wireshark.</p>
      <p><strong>Focus:</strong> Packet analysis · Network protocols · PCAP investigation</p>
      <ul class="chip-list"><li class="chip">Wireshark</li><li class="chip">Network Security</li><li class="chip">Malware Analysis</li><li class="chip">Packet Analysis</li></ul>
    </article>

    <article class="card" data-categories="cybersecurity email-security threat-detection">
      <p class="card-meta"><span class="chip chip-accent">Email Security</span></p>
      <h3><a href="https://github.com/LiulSintayehuTebkew/phishing-email-analysis-compilation" target="_blank" rel="noopener noreferrer">Phishing Email Analysis Compilation ↗</a></h3>
      <p>A collection of practical phishing email analysis exercises focused on examining suspicious email messages, identifying phishing indicators, and understanding common email-based cyber threats.</p>
      <p><strong>Focus:</strong> Email headers · URL analysis · Threat intelligence</p>
      <ul class="chip-list"><li class="chip">Phishing</li><li class="chip">Email Security</li><li class="chip">Threat Intelligence</li><li class="chip">Email Analysis</li></ul>
    </article>

    <article class="card" data-categories="cybersecurity security-operations threat-detection detection-engineering">
      <p class="card-meta"><span class="chip chip-accent">Threat Detection</span></p>
      <h3><a href="https://github.com/LiulSintayehuTebkew/suspicious-powershell-execution-attack-detection" target="_blank" rel="noopener noreferrer">Suspicious PowerShell Execution Attack Detection ↗</a></h3>
      <p>A cybersecurity project focused on identifying and investigating suspicious PowerShell execution activities that may indicate malicious behavior or potential attacks against Windows systems.</p>
      <p><strong>Focus:</strong> PowerShell abuse · Windows event logs · SIEM investigation</p>
      <ul class="chip-list"><li class="chip">PowerShell</li><li class="chip">Windows Security</li><li class="chip">SIEM</li><li class="chip">Incident Response</li></ul>
    </article>

    <div class="empty-state" data-filter-empty hidden>No projects match this category yet.</div>
  </div>

  <p class="lede">More projects and technical write-ups will be added as they are documented.</p>
</div>
