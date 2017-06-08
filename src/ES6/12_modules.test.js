// 12: modules - import
// To do: make all tests pass, leave the expect lines unchanged!

// import using the different imports of the file '../helper/modules'
import {equal, deepEqual, notEqual} from '../helper/modules'
import {equal as myEqual} from '../helper/modules'
import {default as myAssert} from '../helper/modules'
import assertion from '../helper/modules'


describe('use `import` to import functions that have been exported (somewhere else)', () => {

  describe('the import statement', () => {

    it('import an entire module using `import <name> from "<moduleName>"`', () => {
      expect(typeof assertion).toEqual('function')
    })
  })

  describe('import members', () => {
    it('import a single member, using `import {<memberName>} from "module"`', () => {
      expect(equal).toEqual(assertion.equal)
    })

    describe('separate multiple members with a comma', () => {
      it('`deepEqual` from the assert module', () => {
        expect(deepEqual).toEqual(assertion.deepEqual)
      })
      it('`notEqual` from the assert module', () => {
        expect(notEqual).toEqual(assertion.notEqual)
      })
    })
  })

  describe('alias imports', () => {
    it('using `member as alias` as memberName', () => {
      expect(myEqual).toEqual(assertion.equal)
    })
    it('rename the default export of a module, using `default as alias` as memberName', () => {
      expect(myAssert).toEqual(assertion)
    })
  })
})
