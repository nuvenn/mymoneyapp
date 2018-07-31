const BillingCycle = require('./billingCycle')

BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.methods(['get', 'post', 'put', 'delete'])

module.exports = BillingCycle