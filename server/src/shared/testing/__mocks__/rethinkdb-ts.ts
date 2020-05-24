// Mocks RethinkDB module to prevent asynchronous
// operations from being open after running tests.
const r = jest.genMockFromModule('rethinkdb-ts');

module.exports = r;
