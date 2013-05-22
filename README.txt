
      :::::::    :::  ::::::::   ::::::::   ::::::::  ::::::::   :::   :::   ::::::::  ::::::::
     :+:   :+:  :+:  :+:   :+:  :+:   :+:  :+:       :+:   :+:  :+: :+ +:   :+:         :+:
    +:+   +:+  :+:  +:+   +:+  +:+   +:+  +:+       +:+   +:+  +:+   :+:   +:+         +:+
   +#++:++#   +#+  +#+   +#+  +#++:++#   +#++:++#  +#+        +#+    +#+  +#++:++#    +#+
  +#+   +#+  +#+  +#+   +#+  +#+   +#+  +#+       +#+  +#+   +#+    +#+  +#+         +#+
 #+#   #+#  #+#  #+#   #+#  #+#   #+#  #+#       #+#  #+#   #+#    #+#  #+#         #+#
 #######   ###   ########  ###   ###  ########  ########   ###    ###  ########    ###     
                                                    ###
                                               #######

README.txt
----------
Created on 01/16/2013 by Lewis John McGibbney


Introduction
------------
The past few years have seen an explosive growth in scientific and regulatory documents related 
to the patent system. Relevant information is siloed into many heterogeneous and distributed 
information sources making it very challenging to retrieve information across multiple sources. 

In addition, each technical domain involves specific technical jargon and terminological 
inconsistencies which raises the need for semantic interoperability between the various 
information sources. This research project aims to address two major issues -

  - System, Structural and Semantic level interoperability amongst multiple information sources 
    in the patent system through the use of several ontologies

  - An Information Retreival framework across multiple heterogeneous domains

More information on bioRegnet can be found on the EIL site.

http://eil.stanford.edu/bioregnet 


Maven for Dependency Management
-------------------------------
Apache Maven is a software project management and comprehension tool. Based on the 
concept of a project object model (POM). Maven can manage a project's build, 
reporting and documentation from a central piece of information. bioRegnet uses 
Maven to manage dependencies and for lifecycle build management.


Building bioRegnet
------------------ 
To build bioRegnet simply run Maven from within the top level directory as follows

$mvn package

This will build and package the various modules and web application. Meaning we can

 - build the indexes over which we wish to run IR tasks 

 - build a WAR file which we can deploy within any servlet container (such as Tomcat), 
   and run the weba application within the browser.


Prerequisites
-------------
1. Grab the newest version of Maven from http://maven.apache.org and ensure that it is properly installed on your system and 
   can be invoked from the terminal.
2. Obtain the eil SVN username and password from http://eil.stanford.edu/pmwiki/ and add the following server to your 
   Maven ~/.m2/settings.xml file. You may already have other servers in this file. If not just create the file.

<?xml version="1.0" encoding="UTF-8"?>
<settings>
  ...
  <servers>
    <server>
      <id>lewis2.eil.stanford.repository</id>
      <username>${user name goes here}</username>
      <password>{put your password here}</password>
    </server>
  </servers>
  ...
  <profiles>
    <profile>
     ...
    </profile>
  </profiles>
  ...
</settings>


Documentation
-------------
Both Java documentation and accompanying formal documentation accompany bioRegnet 
and can be found within the eil SVN pmwiki @ http://eil.stanford.edu/pmwiki/.
Both resources can be considered as dynamic in nature, as they will grow and change in 
line with the bioRegnet codebase. 
