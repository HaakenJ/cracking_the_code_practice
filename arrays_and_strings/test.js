const chai = require('chai');
const expect = chai.expect;

const checkPalinedrome = require('./checkPalindrome');
const stringCompression = require('./stringCompress');
const oneAway = require('./oneAway');
const rotateMatrix = require('./rotateMatrix');
const rotateMatrixInPlace = require('./rotateMatrixInPlace');
const zeroMatrix = require('./zeroMatrix');

describe('String Compression', () => {
    it('Should properly compress strings', () => {
        expect(stringCompression('aaabbbcccaaa')).to.equal('a3b3c3a3');
        expect(stringCompression('aaaaa')).to.equal('a5');
        expect(stringCompression('AAaaBBbb')).to.equal('A2a2B2b2');
    })
})

describe('Check palindrome', () => {
    const isPalinOdd = 'abcdxdcba';
    const isPalinEven = 'abccba';
    const sameLetters = 'aaaaaaaa';
    const notPalin = 'abcd';
    const single = 'a';
    const withSpaces = 'a man a plan a canal panama';

    it('Should return true', () => {
        expect(checkPalinedrome(isPalinEven)).to.be.true;
        expect(checkPalinedrome(isPalinOdd)).to.be.true;
        expect(checkPalinedrome(sameLetters)).to.be.true;
        expect(checkPalinedrome(single)).to.be.true;
        expect(checkPalinedrome(withSpaces)).to.be.true;
    })

    it('Should return false', () => {
        expect(checkPalinedrome(notPalin)).to.be.false;
    })
})

describe('Rotate Matrix', () => {
    const matrix3 = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    
    const matrix4 = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
    ]
    
    const matrix5= [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]

    it('Should rotate the three dimension matrix 90 degrees', () => {
        expect(rotateMatrix(matrix3)).to.deep.equal([
            [7,4,1],
            [8,5,2],
            [9,6,3]
        ])
    })

    it('Should rotate the four dimension matrix 90 degrees', () => {
        expect(rotateMatrix(matrix4)).to.deep.equal([
            [13,9,5,1],
            [14,10,6,2],
            [15,11,7,3],
            [16,12,8,4]
        ])
    })

    it('Should rotate the five dimension matrix 90 degrees', () => {
        expect(rotateMatrix(matrix5)).to.deep.equal([
            [21,16,11,6,1],
            [22,17,12,7,2],
            [23,18,13,8,3],
            [24,19,14,9,4],
            [25,20,15,10,5]
        ])
    })

    it('Should rotate the three dimension matrix 90 degrees IN PLACE', () => {
        expect(rotateMatrixInPlace(matrix3)).to.deep.equal([
            [7,4,1],
            [8,5,2],
            [9,6,3]
        ])
    })

    it('Should rotate the four dimension matrix 90 degrees IN PLACE', () => {
        expect(rotateMatrixInPlace(matrix4)).to.deep.equal([
            [13,9,5,1],
            [14,10,6,2],
            [15,11,7,3],
            [16,12,8,4]
        ])
    })

    it('Should rotate the five dimension matrix 90 degrees IN PLACE', () => {
        expect(rotateMatrixInPlace(matrix5)).to.deep.equal([
            [21,16,11,6,1],
            [22,17,12,7,2],
            [23,18,13,8,3],
            [24,19,14,9,4],
            [25,20,15,10,5]
        ])
    })
})

describe('Zero Matrix', () => {
    it('Should change rows and columns with 0\'s to all zeros', () => {
        const matrix3 = [
            [0,2,3],
            [4,5,6],
            [7,8,9]
        ];
        
        const matrix4 = [
            [1,2,3,4],
            [5,6,7,8],
            [0,10,11,12],
            [13,14,15,16]
        ];
        
        const matrix5= [
            [1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20],
            [0,22,23,24,25]
        ];

        const matrix5Cross= [
            [1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,0,14,15],
            [16,17,18,19,20],
            [21,22,23,24,25]
        ];

        expect(zeroMatrix(matrix3)).to.deep.equal([
            [0,0,0],
            [0,5,6],
            [0,8,9]
        ])

        expect(zeroMatrix(matrix4)).to.deep.equal([
            [0,2,3,4],
            [0,6,7,8],
            [0,0,0,0],
            [0,14,15,16]
        ])

        expect(zeroMatrix(matrix5)).to.deep.equal([
            [0,2,3,4,5],
            [0,7,8,9,10],
            [0,12,13,14,15],
            [0,17,18,19,20],
            [0,0,0,0,0]
        ])

        expect(zeroMatrix(matrix5Cross)).to.deep.equal([
            [1,2,0,4,5],
            [6,7,0,9,10],
            [0,0,0,0,0],
            [16,17,0,19,20],
            [21,22,0,24,25]
        ])
    })

    it('Should return false for invalid matrix', () => {
        expect(zeroMatrix([1,2,3])).to.be.false
        expect(zeroMatrix([])).to.be.false
    })

    it('Should not change a maxtrix with no zeros', () => {
        const matrix3 = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ];

        expect(zeroMatrix(matrix3)).to.deep.equal([
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ])
    })
})