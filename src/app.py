import logging
import tornado.auth
import tornado.escape
import tornado.ioloop
import tornado.options
import tornado.web
import os.path
import uuid
import json
from  tornado.escape import json_decode
from  tornado.escape import json_encode
from tornado.options import define, options
import requests
from raven import Client

from handlers.ConnectingPathHandler import FindEdgeLabel, FindOutputHandler, MetaDataHandler, ConnectingPathHandler, EndpointHandler, ConnectingOutputHandler, ConnectingInputHandler, ApiMapHandler, ApiMapHandlerSankey, Input2EndpointHandler, KnowledgeMap, KnowledgeMapPath, Endpoint2OutputHandler
from handlers.entitycrawler import Crawler
from handlers.basehandler import BaseHandler
from handlers.DirectPathHandler import DirectPathHandler
from handlers.DirectInput2OutputHandler import DirectInput2OutputHandler
from handlers.FindSynonymHandler import SynonymHandler
from handlers.SemanticQueryHandler import QuerySemanticsHandler

client = Client('https://9dd387ee33954e9887ef4a6b55c7aa29:d98404d6199a4db1aa9b5a1e9fc3c975@sentry.io/294205')


class MainHandler(tornado.web.RequestHandler):
    @tornado.web.addslash
    def get(self):
        self.write("Hello, world")

class APIHandler(tornado.web.RequestHandler):
    @tornado.web.addslash
    def get(self):
        self.write("Hello, world")

class Application(tornado.web.Application):
    def __init__(self):
        settings = {
            'debug': True,
            'template_path': os.path.join(os.path.dirname(__file__), "templates"),
            'static_path': os.path.join(os.path.dirname(__file__), "static")
        }
        handlers = [
            (r"/explorer/?", MainHandler),
            (r"/explorer/api/?", APIHandler)
        ]

        tornado.web.Application.__init__(self, handlers, **settings)

def main():
    app = Application()
    app.listen(8853)
    tornado.ioloop.IOLoop.instance().start()


if __name__ == "__main__":
    main()
