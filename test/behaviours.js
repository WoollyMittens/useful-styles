var webdriverjs = require('webdriverjs'),
    assert = require('assert'),
    path = 'http://local.woollymittens.nl/useful-styles/';

describe('Expected behaviours of "useful-styles"', function(){

    this.timeout(99999999);
    var client = {};

    before(function(){
        client = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
        client.init();
    });

    it('should apply ad hoc styles', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                useful.styles.add(document.getElementById('styles-test-input').value);
                setTimeout(function () {
                    done(document.getElementById('styles-test-output').offsetWidth);
                }, 100);

            }, function (err, result) {

                assert(
                    result.value === 20
                );

            })
            .call(done);
    });

    it('should remove the ad hoc styles', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                useful.styles.reset();
                setTimeout(function () {
                    done(document.getElementById('styles-test-output').offsetWidth);
                }, 100);

            }, function (err, result) {

                assert(
                    result.value !== 20
                );

            })
            .call(done);
    });

    it('should load an external stylesheet', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                window.loadedElement = useful.styles.load('./inc/css/test.css');
                setTimeout(function () {
                    done(document.getElementById('styles-test-output').offsetWidth);
                }, 1000);

            }, function (err, result) {

                assert(
                    result.value === 30
                );

            })
            .call(done);
    });

    it('should unload the external stylesheet', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                if (window.loadedElement) useful.styles.unload(window.loadedElement);
                setTimeout(function () {
                    done(document.getElementById('styles-test-output').offsetWidth);
                }, 100);

            }, function (err, result) {

                assert(
                    result.value !== 30
                );

            })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});
