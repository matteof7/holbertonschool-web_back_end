#!/usr/bin/env python3
"""
Module for MongoDB operations with Python - Insert document
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a MongoDB collection based on kwargs
    
    Args:
        mongo_collection: PyMongo collection object
        **kwargs: Arbitrary keyword arguments to be inserted as fields
        
    Returns:
        The new _id of the inserted document
    """
    # Insert the document with all keyword arguments as fields
    result = mongo_collection.insert_one(kwargs)
    
    # Return the _id of the inserted document
    return result.inserted_id
