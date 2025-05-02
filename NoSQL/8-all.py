#!/usr/bin/env python3
"""
Module for MongoDB operations with Python
"""


def list_all(mongo_collection):
    """
    Lists all documents in a MongoDB collection
    
    Args:
        mongo_collection: PyMongo collection object
        
    Returns:
        List of all documents or empty list if no documents
    """
    if mongo_collection is None:
        return []
    
    documents = list(mongo_collection.find())
    return documents
