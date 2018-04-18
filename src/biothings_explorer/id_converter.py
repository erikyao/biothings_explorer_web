import requests
from pyld import jsonld

from .config import MYGENE_URI2SCOPE, MYGENE_QUERY_JSONLD

class GeneIDConverter:
    def __init__(self):
        self.params_template = 'q={input_value}&scopes={input_type}&fields=symbol,entrezgene,MIM,uniprot.Swiss-Prot,ensembl.gene,ensembl.protein,ensembl.transcript&dotfield=True'
        self.url = 'http://mygene.info/v3/query'
        self.header = {'content-type': 'application/x-www-form-urlencoded'}

    def find_synonym(self, input_value, input_type, mode='single'):
        """
        Input: "ncbigene:1017",
        output: {
                    "http://identifiers.org/hgnc/": "1771",
                    "http://identifiers.org/ensembl.gene/": "ENSG00000123374",
                    "http://identifiers.org/hgnc.symbol/": "CDK2",
                    "http://identifiers.org/uniprot": "P24941"
                }
        """
        params = self.params_template.replace('{input_value}', str(input_value)).replace('{input_type}', MYGENE_URI2SCOPE[input_type])
        if mode == 'single':
            # check whether input_value is single
            # check whether input_type is uri and whether is in the URI2SCOPE dict            
            # get json doc from mygene.info
            mygene_doc = requests.get(self.url, params=params).json()['hits'][0]
            # add jsonld context file
            mygene_jsonld_doc = {}
            for k,v in mygene_doc.items():
                if k in MYGENE_QUERY_JSONLD:
                    mygene_jsonld_doc[MYGENE_QUERY_JSONLD[k]] = v
            return mygene_jsonld_doc
        else:
            mygene_docs = requests.post(self.url, data=params, headers=self.header).json()
            mygene_flatten = []
            for _doc in mygene_docs:
                mygene_jsonld_doc = {}
                for k,v in _doc.items():
                    if k in MYGENE_QUERY_JSONLD:
                        mygene_jsonld_doc[MYGENE_QUERY_JSONLD[k]] = v
                mygene_flatten.append(mygene_jsonld_doc)
            return mygene_flatten


