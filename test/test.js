'use strict';

var expect = require('expect.js');

var guid = require('../dist/index.js').guid;
var uuid = require('../dist/index.js').uuid;

describe('单元测试', function() {
    this.timeout(1000);

    describe('guid', function() {
        it('无参数', function() {
            expect(guid()).to.equal('0');
            expect(guid()).to.equal('1');
            expect(guid()).to.equal('2');
            expect(guid()).to.equal('3');
            expect(guid()).to.equal('4');
        });

        it('有参数', function() {
            expect(guid('a')).to.equal('a5');
            expect(guid('a')).to.equal('a6');
            expect(guid('b')).to.equal('b7');
            expect(guid('c')).to.equal('c8');
            expect(guid('d')).to.equal('d9');
        });

        it('多次不相等测试', function() {
            let i = 1000;
            while(i--) {
                expect(guid()).not.to.equal(guid());
            }
        });
    });

    describe('uuid', function() {
        it('类型测试', function() {
            const id = uuid();
            expect(typeof id).to.equal('string');
        });

        it('类型测试', function() {
            const id = uuid();
            expect(/^[0-9A-Z]{8}-[0-9A-Z]{4}-4[0-9A-Z]{3}-[0-9A-Z]{4}-[0-9A-Z]{12}$/.test(id)).to.equal(true);
        });

        it('多次不相等测试', function() {
            let i = 20;
            while(i--) {
                expect(uuid()).not.to.equal(uuid());
            }
        });
    });
});
