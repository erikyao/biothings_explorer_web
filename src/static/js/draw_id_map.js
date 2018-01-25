
  var nodes_id = [{'group': 'gene', 'id': 1, 'label': 'ensembl.gene'},
 {'group': 'gene', 'id': 2, 'label': 'hgnc.symbol'},
 {'group': 'transcript', 'id': 3, 'label': 'unigene'},
 {'group': 'chemical', 'id': 4, 'label': 'chembl'},
 {'group': 'gene', 'id': 5, 'label': 'ncbigene'},
 {'group': 'protein', 'id': 6, 'label': 'ensembl.protein'},
 {'group': 'chemical', 'id': 7, 'label': 'inchikey'},
 {'group': 'gene', 'id': 8, 'label': 'hgnc'},
 {'group': 'phenotype', 'id': 9, 'label': 'hp'},
 {'group': 'variant', 'id': 10, 'label': 'dbsnp'},
 {'group': 'variant', 'id': 11, 'label': 'efo'},
 {'group': 'protein', 'id': 12, 'label': 'refseq'},
 {'group': 'gene', 'id': 13, 'label': 'ccds'},
 {'group': 'variant', 'id': 14, 'label': 'hgvs'},
 {'group': 'protein', 'id': 15, 'label': 'ensembl.translation'},
 {'group': 'organism', 'id': 16, 'label': 'taxonomy'},
 {'group': 'chemical', 'id': 17, 'label': 'unii'},
 {'group': 'structure', 'id': 18, 'label': 'pdb'},
 {'group': 'disease', 'id': 19, 'label': 'snomed'},
 {'group': 'pathway', 'id': 20, 'label': 'reactome'},
 {'group': 'pathway', 'id': 21, 'label': 'kegg.pathway'},
 {'group': 'pathway', 'id': 22, 'label': 'biocarta.pathway'},
 {'group': 'variant', 'id': 23, 'label': 'clinvar'},
 {'group': 'pathway', 'id': 24, 'label': 'pharmgkb.pathway'},
 {'group': 'chemical', 'id': 25, 'label': 'rxnorm'},
 {'group': 'disease', 'id': 26, 'label': 'orphanet'},
 {'group': 'protein', 'id': 27, 'label': 'uniprot'},
 {'group': 'chemical', 'id': 28, 'label': 'drugname'},
 {'group': 'chemical', 'id': 29, 'label': 'drugbank'},
 {'group': 'transcript', 'id': 30, 'label': 'ensembl.transcript'},
 {'group': 'chemical', 'id': 31, 'label': 'chebi'},
 {'group': 'publication', 'id': 32, 'label': 'pubmed'},
 {'group': 'chemical', 'id': 33, 'label': 'inchi'},
 {'group': 'chemical', 'id': 34, 'label': 'kegg.drug'},
 {'group': 'disease', 'id': 35, 'label': 'omim disease'},
 {'group': 'variant', 'id': 36, 'label': 'omim variant'},
 {'group': 'disease', 'id': 37, 'label': 'do'},
 {'group': 'pathway', 'id': 38, 'label': 'wikipathways'},
 {'group': 'chemical', 'id': 39, 'label': 'pubchem.compound'},
 {'group': 'chemical', 'id': 40, 'label': 'iuphar.ligand'},
 {'group': 'clinical significance', 'id': 41, 'label': 'clinicalsignificance'},
 {'group': 'chemical', 'id': 42, 'label': 'kegg.compound'},
 {'group': 'disease', 'id': 43, 'label': 'nci'},
 {'group': 'gene', 'id': 44, 'label': 'mgi'},
 {'group': 'clinical trial', 'id': 45, 'label': 'clinicaltrial'},
 {'group': 'disease', 'id': 46, 'label': 'Disease Name'},
 {'group': 'disease', 'id': 47, 'label': 'mesh'},
 {'group': 'gene', 'id': 48, 'label': 'zfin'},
 {'group': 'disease', 'id': 49, 'label': 'umls'}];

  // create an array with edges
  var edges_id = [{'from': 1,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 3,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 4,
  'label': 'physicallyInteractsWith',
  'title': 'http://dgidb.genome.wustl.edu/api/v2/interactions.json?drugs={drugname}',
  'to': 5},
 {'from': 6,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 7,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 8,
  'label': 'associatedWithPhenotype',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/phenotypes',
  'to': 9},
 {'from': 10,
  'label': 'hasXref',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 11},
 {'from': 12,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 13,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 15,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 17,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 1,
  'label': 'associatedWithProteinStructure',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 18},
 {'from': 5,
  'label': 'physicallyInteractsWith',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/interactions',
  'to': 8},
 {'from': 19,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 1,
  'label': 'associatedWithPathway',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 20},
 {'from': 21,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 1,
  'label': 'associatedWithTranscript',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 3},
 {'from': 22,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 14,
  'label': 'hasXref',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 23},
 {'from': 5,
  'label': 'associatedWithPhenotype',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/phenotypes',
  'to': 9},
 {'from': 5,
  'label': 'associatedWithPathway',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 21},
 {'from': 24,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 14,
  'label': 'associatedWithGene',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 1},
 {'from': 25,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 26,
  'label': 'associatedWithPhenotype',
  'title': 'https://api.monarchinitiative.org/api/bioentity/disease/{diseaseid}/phenotypes',
  'to': 9},
 {'from': 2,
  'label': 'associatedWithChemical',
  'title': 'http://dgidb.genome.wustl.edu/api/v2/interactions.json?genes={genesymbol}',
  'to': 4},
 {'from': 4,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 7,
  'label': 'associatedWithVariant',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 10},
 {'from': 27,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 14,
  'label': 'hasXref',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 11},
 {'from': 5,
  'label': 'associatedWithPathway',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 24},
 {'from': 22,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 27,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 2,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 28,
  'label': 'physicallyInteractsWith',
  'title': 'http://dgidb.genome.wustl.edu/api/v2/interactions.json?drugs={drugname}',
  'to': 2},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 29},
 {'from': 5,
  'label': 'associatedWithTranscript',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 30},
 {'from': 31,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 18,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 7,
  'label': 'catalyzedBy',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 27},
 {'from': 32,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 1,
  'label': 'associatedWithTranscript',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 30},
 {'from': 5,
  'label': 'hasXref',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 1},
 {'from': 1,
  'label': 'hasXref',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 1},
 {'from': 5,
  'label': 'associatedWithChemical',
  'title': 'http://dgidb.genome.wustl.edu/api/v2/interactions.json?genes={genesymbol}',
  'to': 4},
 {'from': 15,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 20,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 10,
  'label': 'associatedWithGene',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 8},
 {'from': 18,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 12,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 33},
 {'from': 34,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 26,
  'label': 'associatedWithDisease',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/diseases',
  'to': 35},
 {'from': 14,
  'label': 'associatedWithGene',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 8},
 {'from': 27,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 26,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 35,
  'label': 'associatedWithGene',
  'title': 'https://api.monarchinitiative.org/api/bioentity/disease/{diseaseid}/genes',
  'to': 5},
 {'from': 10,
  'label': 'hasXref',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 10},
 {'from': 5,
  'label': 'hasXref',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 2},
 {'from': 2,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 5,
  'label': 'associatedWithDisease',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/diseases',
  'to': 35},
 {'from': 28,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 10,
  'label': 'hasXref',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 36},
 {'from': 15,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 12,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 14,
  'label': 'associatedWithGene',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 2},
 {'from': 10,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 2,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 1,
  'label': 'associatedWithPathway',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 21},
 {'from': 1,
  'label': 'associatedWithPathway',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 24},
 {'from': 5,
  'label': 'associatedWithTranscript',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 3},
 {'from': 5,
  'label': 'associatedWithDisease',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/diseases',
  'to': 37},
 {'from': 7,
  'label': 'physicallyInteractsWith',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 27},
 {'from': 23,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 33,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 35,
  'label': 'associatedWithPhenotype',
  'title': 'https://api.monarchinitiative.org/api/bioentity/disease/{diseaseid}/phenotypes',
  'to': 9},
 {'from': 6,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 38,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 35,
  'label': 'associatedWithGene',
  'title': 'https://api.monarchinitiative.org/api/bioentity/disease/{diseaseid}/genes',
  'to': 8},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 39},
 {'from': 14,
  'label': 'hasXref',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 10},
 {'from': 5,
  'label': 'associatedWithProteinStructure',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 18},
 {'from': 10,
  'label': 'associatedWithGene',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 1},
 {'from': 21,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 27,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 29,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 30,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 40},
 {'from': 14,
  'label': 'associatedWithTranscript',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 30},
 {'from': 38,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 1,
  'label': 'hasXref',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 2},
 {'from': 37,
  'label': 'associatedWithPhenotype',
  'title': 'https://api.monarchinitiative.org/api/bioentity/disease/{diseaseid}/phenotypes',
  'to': 9},
 {'from': 5,
  'label': 'functionTogetherWith',
  'title': 'http://hb.flatironinstitute.org/api/integrations/{tissue}/network',
  'to': 2},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 28},
 {'from': 5,
  'label': 'associatedWithChemical',
  'title': 'http://dgidb.genome.wustl.edu/api/v2/interactions.json?genes={genesymbol}',
  'to': 28},
 {'from': 11,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 28,
  'label': 'physicallyInteractsWith',
  'title': 'http://dgidb.genome.wustl.edu/api/v2/interactions.json?drugs={drugname}',
  'to': 5},
 {'from': 10,
  'label': 'hasProperty',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 41},
 {'from': 5,
  'label': 'associatedWithProtein',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 6},
 {'from': 5,
  'label': 'associatedWithPathway',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 20},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 42},
 {'from': 37,
  'label': 'hasXref',
  'title': 'http://www.disease-ontology.org/api/metadata/{doid}',
  'to': 43},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 7},
 {'from': 38,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 41,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 42,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 39,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 5,
  'label': 'hasHomolog',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/homologs',
  'to': 44},
 {'from': 6,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 7,
  'label': 'associatedWithClinicalTrial',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 45},
 {'from': 7,
  'label': 'associatedWithPublication',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 32},
 {'from': 14,
  'label': 'associatedWithGene',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 13},
 {'from': 1,
  'label': 'associatedWithProtein',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 15},
 {'from': 40,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 1,
  'label': 'associatedWithProtein',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 6},
 {'from': 14,
  'label': 'hasProperty',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 41},
 {'from': 1,
  'label': 'associatedWithProtein',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 27},
 {'from': 5,
  'label': 'associatedWithPathway',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 38},
 {'from': 14,
  'label': 'associatedWithDisease',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 26},
 {'from': 10,
  'label': 'associatedWithDisease',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 26},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 17},
 {'from': 14,
  'label': 'associatedWithPublication',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 32},
 {'from': 30,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 18,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 10,
  'label': 'hasXref',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 23},
 {'from': 1,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 5,
  'label': 'physicallyInteractsWith',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/interactions',
  'to': 5},
 {'from': 7,
  'label': 'carriedBy',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 27},
 {'from': 30,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 5,
  'label': 'associatedWithProtein',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 15},
 {'from': 10,
  'label': 'associatedWithProtein',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 27},
 {'from': 8,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 36,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 30,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 27,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 1,
  'label': 'associatedWithPathway',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 22},
 {'from': 10,
  'label': 'associatedWithProtein',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 6},
 {'from': 24,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 25},
 {'from': 24,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 8,
  'label': 'physicallyInteractsWith',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/interactions',
  'to': 5},
 {'from': 1,
  'label': 'associatedWithPathway',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 38},
 {'from': 1,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 20,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 14,
  'label': 'associatedWithProtein',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 6},
 {'from': 1,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 14,
  'label': 'hasXref',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 36},
 {'from': 37,
  'label': 'hasXref',
  'title': 'http://www.disease-ontology.org/api/metadata/{doid}',
  'to': 35},
 {'from': 7,
  'label': 'associatedWithDisease',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 19},
 {'from': 20,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 8,
  'label': 'physicallyInteractsWith',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/interactions',
  'to': 8},
 {'from': 10,
  'label': 'associatedWithTranscript',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 30},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 34},
 {'from': 10,
  'label': 'associatedWithPublication',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 32},
 {'from': 37,
  'label': 'hasXref',
  'title': 'http://www.disease-ontology.org/api/metadata/{doid}',
  'to': 19},
 {'from': 14,
  'label': 'associatedWithChemical',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 28},
 {'from': 7,
  'label': 'associatedWithDisease',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 46},
 {'from': 10,
  'label': 'associatedWithGene',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 13},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 31},
 {'from': 28,
  'label': 'associatedWithChemical',
  'title': 'http://mychem.info/v1/query',
  'to': 7},
 {'from': 10,
  'label': 'associatedWithChemical',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 28},
 {'from': 3,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 5,
  'label': 'associatedWithProtein',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 27},
 {'from': 7,
  'label': 'hasXref',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 4},
 {'from': 26,
  'label': 'associatedWithDisease',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/diseases',
  'to': 37},
 {'from': 22,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 5,
  'label': 'associatedWithPathway',
  'title': 'http://mygene.info/v3/gene/{geneid}',
  'to': 22},
 {'from': 3,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 5},
 {'from': 5,
  'label': 'hasHomolog',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/homologs',
  'to': 5},
 {'from': 37,
  'label': 'associatedWithGene',
  'title': 'https://api.monarchinitiative.org/api/bioentity/disease/{diseaseid}/genes',
  'to': 5},
 {'from': 21,
  'label': 'associatedWithGene',
  'title': 'http://mygene.info/v3/query',
  'to': 2},
 {'from': 37,
  'label': 'hasXref',
  'title': 'http://www.disease-ontology.org/api/metadata/{doid}',
  'to': 47},
 {'from': 7,
  'label': 'transportedBy',
  'title': 'http://mychem.info/v1/drug/{drugid}',
  'to': 27},
 {'from': 14,
  'label': 'associatedWithProtein',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 27},
 {'from': 2,
  'label': 'associatedWithChemical',
  'title': 'http://dgidb.genome.wustl.edu/api/v2/interactions.json?genes={genesymbol}',
  'to': 28},
 {'from': 10,
  'label': 'associatedWithGene',
  'title': 'http://myvariant.info/v1/variant/{variantid}',
  'to': 2},
 {'from': 6,
  'label': 'associatedWithOrganism',
  'title': 'http://mygene.info/v3/query',
  'to': 16},
 {'from': 5,
  'label': 'hasHomolog',
  'title': 'https://api.monarchinitiative.org/api/bioentity/gene/{geneid}/homologs',
  'to': 48},
 {'from': 37,
  'label': 'associatedWithGene',
  'title': 'https://api.monarchinitiative.org/api/bioentity/disease/{diseaseid}/genes',
  'to': 8},
 {'from': 2,
  'label': 'associatedWithVariant',
  'title': 'http://myvariant.info/v1/query',
  'to': 14},
 {'from': 37,
  'label': 'hasXref',
  'title': 'http://www.disease-ontology.org/api/metadata/{doid}',
  'to': 49},
 {'from': 4,
  'label': 'physicallyInteractsWith',
  'title': 'http://dgidb.genome.wustl.edu/api/v2/interactions.json?drugs={drugname}',
  'to': 2}]
;

function drawIdLevelMap(){
// create an array with nodes


  // create a network
  var container = document.getElementById('bioentity_id_view');
    // legend
  var x = - container.clientWidth / 2 + 50;
  var y = - container.clientHeight / 2 + 50;
  var step = 70;
  nodes_id.push({id: 1000, x: x, y: y, label: 'gene', group: 'gene', value: 1, fixed: true, physics:false});
  nodes_id.push({id: 1001, x: x, y: y + step, label: 'protein', group: 'protein', value: 1, fixed: true,  physics:false});
  nodes_id.push({id: 1002, x: x, y: y + 2 * step, label: 'pathway', group: 'pathway', value: 1, fixed: true,  physics:false});
  nodes_id.push({id: 1003, x: x, y: y + 3 * step, label: 'disease', group: 'disease', value: 1, fixed: true,  physics:false});
  nodes_id.push({id: 1004, x: x, y: y + 4 * step, label: 'chemical', group: 'chemical', value: 1, fixed: true,  physics:false});
  nodes_id.push({id: 1005, x: x, y: y + 4 * step, label: 'phenotype', group: 'phenotype', value: 1, fixed: true,  physics:false});

  var data = {
    nodes: nodes_id,
    edges: edges_id
  };
  var options = {
  	nodes: {
  		shape: 'box',
  		size: 10,
  		font: {
  			size:10
  		},
  		borderWidth:1,
  		shadow: true
  	},
  	edges: {
  		width:1,
  		shadow: true,
      font: {
        size:5,
        align: 'middle'
      }
  	},
  	layout:{randomSeed:3}
  };
  var network_id = new vis.Network(container, data, options);
};


