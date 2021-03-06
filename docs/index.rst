.. Gardener documentation master file, created by
   sphinx-quickstart on Tue Jan 15 09:49:25 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Gardener
====================================
This open source project solves the problem of getting knowledge from outside of the blockchain into smart contracts.

Oracle theory
-------------
Oracle is a concept of getting information from outside of the blockchain to the smart contracts. Out of the box smart contracts cannot access anything outside of the blockchain network. That's where the oracle idea fits. The information exchange begins with the smart contract emitting an event describing the necessary information. A trusted off-chain server listening for such events parses it, gets data from a data source and passes it back to the smart contract.


Contents
========

.. toctree::
   :maxdepth: 2

   introduction
   prerequisites
   getting-started
   making-requests
   configuration
