import * as chai from 'chai'
const chaiAsPromised = require('chai-as-promised')
const chaiString = require('chai-string')
const chaiSubset = require('chai-subset')

chai.use(chaiAsPromised)
chai.use(chaiString)
chai.use(chaiSubset)

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
