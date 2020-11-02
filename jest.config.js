/*
 * @Author: your name
 * @Date: 2020-11-02 17:08:09
 * @LastEditTime: 2020-11-02 17:42:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-homework/jest.config.js
 */
const path = require('path');
module.exports = {
    verbose: true,
    testURL: 'http://localhost/',
    rootDir: path.resolve(__dirname, ''),
    // 告诉jest需要解析的文件
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue'
    ],
    // 告诉jest去哪里找模块资源，同webpack中的modules
    moduleDirectories: [
        'src',
        'node_modules'
    ],
    // 告诉jest针对不同类型的文件如何转义; 如果引入其他模块需要loader，可在这加入
    transform: {
        '^.+\\.(vue)$': '<rootDir>/node_modules/vue-jest',
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest'
    },
    // 告诉jest在编辑的过程中可以忽略哪些文件，默认为node_modules下的所有文件；也可以写不忽略的规则
    transformIgnorePatterns: [
        '<rootDir>/node_modules/'
        + '(?!(resize-detector|froala-editor|echarts|html2canvas|jspdf))'
    ],
    // 别名，同webpack中的alias
    moduleNameMapper: {
        '^src(.*)$': '<rootDir>/src/$1',
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: [
        'jest-serializer-vue'
    ],
    // 告诉jest去哪里找编写的测试文件
    testMatch: [
        // '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
        '**/test/unit/**/*.spec.(js|jsx|ts|tsx)|**/__test__/*.(js|jsx|ts|tsx)'
    ],
    // 在执行测试用例之前需要先执行的文件;比如引入依赖
    setupFiles: ['<rootDir>/test/unit/setup.js'],
    // // 开启测试报告
    collectCoverage: true
};
