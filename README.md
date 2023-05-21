# VansDB
Tutorial express mongoDB using mongoose ODM to reproduce an ERD.

# project structure

    .root
	├── controllers                    	# folder controllers entities
    ├── db                    			# db configuration settings folder
    │   └── conn.js                    	# connection file
    ├── models                         	# folder models entities
    ├── nodes_modules                   # dependencies modules
    ├── .env                            # environment file
    ├── .gitignore                      # ignore files for remotes upload
    ├── CHANGELOG                       # traceback all edition on project within release logic
    ├── index.js                        # main entry file
    ├── LICENCE                         # Applied licence rule for this project
    ├── loadEnvironment.js              # load all environment variable inside the global JS context runtime
    ├── package.json                    # npm dependencies requirements and information collection in a YAML syntax
    └── README.md                       # documentation file