const chai = require('chai');
const assertArrays = require('chai-arrays');
const expect = chai.expect;
chai.use(assertArrays);


// Arrays and Strings
const rotateMatrixInPlace = require('./arrays_and_strings/rotateMatrixInPlace');
const rotateMatrix = require('./arrays_and_strings/rotateMatrix');

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