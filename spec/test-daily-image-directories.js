/**
 * Created by charlie on 7/7/16.
 */

describe('Create directories for each day we took photos', function() {

    'use strict';

    const elfConfig = require('isit-code-means').elfConfig;
    const elfLog = require('isit-code-means').elfLog('test-daily-image-directories');
    elfLog.setLevel(elfLog.logLevelDetails);
    const configurationSettings = require('../image-help/index').configSettings;
    const createDirectories = require('../image-help/index').createDirectories;

    beforeEach(function() {
        elfConfig.useLocalConfig = false;
        elfConfig.forceReload();
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('to find california1 in config with get', function(done) {
        expect(true).toBe(true);
        elfConfig.useLocalConfig = true;
        const california = configurationSettings.getSelectedElvenImage('california1');
        expect(california.baseDir).toBe('/var/www/html/images');
        expect(california.imageDir).toBe('/california1');
        done();
    });

    it('expects to get be able to get test images', function() {
        const testImages = configurationSettings.getSelectedElvenImage('testImages');
        expect(testImages).toBeDefined();
    });

    it('expects to get valid picture path', function() {
        elfConfig.useLocalConfig = true;
<<<<<<< HEAD
        const spain = configurationSettings.getSelectedElvenImage('testImages');
        const picturePath = createDirectories.getPicturePath(spain);
        expect(picturePath).toBe(process.env.home +'/Git/writings/Tech/Markdown/testImages/');
=======
        const testImages = configurationSettings.getSelectedElvenImage('testImages');
        const picturePath = createDirectories.getPicturePath(testImages);
        expect(picturePath).toBe('/home/charlie/Git/writings/Tech/Markdown/testImages/');
>>>>>>> 9eab0f559a25909fcc4236059a98c6408f8e9399
        //done();
    });

    it('to find unique file name preface', function(done) {
        const testImages = configurationSettings.getSelectedElvenImage('testImages');
        createDirectories.run(testImages, function() {
            expect(true).toBe(true);
            done();
        });
    });

});
