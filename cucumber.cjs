module.exports = {
  default: {
    require: [
      'tests/steps/**/*.js',
      'tests/support/**/*.js'
    ],
    format: ['html:reports/cucumber-report.html'],
    paths: ['tests/features/**/*.feature'],
    publishQuiet: true
  }
};