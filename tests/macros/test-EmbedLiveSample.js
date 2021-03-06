/* jshint node: true, mocha: true, esversion: 6 */

var utils = require('./utils'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    assert = chai.assert,
    itMacro = utils.itMacro,
    describeMacro = utils.describeMacro;

chai.use(chaiAsPromised);

describeMacro('EmbedLiveSample', function () {
    itMacro('One argument: ID', function (macro) {
        macro.ctx.env.url = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure';
        macro.ctx.env.revision_id = 1397983;
        return assert.eventually.equal(
            macro.call('Quotations'),
            '<iframe class="live-sample-frame sample-code-frame"' +
            ' id="frame_Quotations" frameborder="0"' +
            ' src="https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/figure$samples/Quotations?revision=1397983">' +
            '</iframe>'
        );
    });
    itMacro('One argument: ID with HTML entities (bug?)', function (macro) {
        // Kuma doesn't serve the sample for the generated URL
        macro.ctx.env.url = 'https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch';
        macro.ctx.env.revision_id = 1408880;
        return assert.eventually.equal(
            macro.call('SVG_&lt;switch&gt;_example'),
            '<iframe class="live-sample-frame sample-code-frame"' +
            ' id="frame_SVG_&lt;switch&gt;_example" frameborder="0"' +
            ' src="https://mdn.mozillademos.org/en-US/docs/Web/SVG/Element/switch$samples/SVG_&amp;lt;switch&amp;gt;_example?revision=1408880">' +
            '</iframe>'
        );
    });
    itMacro('One argument: percent-encoded ID', function (macro) {
        // Kuma doesn't serve the sample for the generated URL
        macro.ctx.env.url = 'https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch';
        macro.ctx.env.revision_id = 1408886;
        return assert.eventually.equal(
            macro.call('SVG_%3Cswitch%3E_example'),
            '<iframe class="live-sample-frame sample-code-frame"' +
            ' id="frame_SVG_%3Cswitch%3E_example" frameborder="0"' +
            ' src="https://mdn.mozillademos.org/en-US/docs/Web/SVG/Element/switch$samples/SVG_%3Cswitch%3E_example?revision=1408886">' +
            '</iframe>'
        );
    });
    itMacro('One argument: ID with percent-encoded page URL', function (macro) {
        // Kuma doesn't serve the sample for the generated URL
        macro.ctx.env.url = 'https://developer.mozilla.org/fr/docs/Web/CSS/Utilisation_de_d%C3%A9grad%C3%A9s_CSS';
        macro.ctx.env.revision_id = 1347968;
        return assert.eventually.equal(
            macro.call('Dégradés_linéaires_simples'),
            '<iframe class="live-sample-frame sample-code-frame"' +
            ' id="frame_Dégradés_linéaires_simples" frameborder="0"' +
            ' src="https://mdn.mozillademos.org/fr/docs/Web/CSS/Utilisation_de_d%C3%A9grad%C3%A9s_CSS$samples/Dégradés_linéaires_simples?revision=1347968">' +
            '</iframe>'
        );
    });
    itMacro('Two arguments: ID, width', function (macro) {
        macro.ctx.env.url = 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width';
        macro.ctx.env.revision_id = 1352086;
        return assert.eventually.equal(
            macro.call('Example', '100%'),
            '<iframe class="live-sample-frame sample-code-frame"' +
            ' id="frame_Example" frameborder="0"' +
            ' width="100%"' +
            ' src="https://mdn.mozillademos.org/en-US/docs/Web/CSS/border-top-width$samples/Example?revision=1352086">' +
            '</iframe>'
        );
    });
    itMacro('Three arguments: ID, width, height', function (macro) {
        macro.ctx.env.url = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure';
        macro.ctx.env.revision_id = 1397983;
        return assert.eventually.equal(
            macro.call("Images", "100%", 250),
            '<iframe class="live-sample-frame sample-code-frame"' +
            ' id="frame_Images" frameborder="0"' +
            ' width="100%" height="250"' +
            ' src="https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/figure$samples/Images?revision=1397983">' +
            '</iframe>'
        );
    });
    itMacro('Three arguments: unicode ID, width, height', function (macro) {
        macro.ctx.env.url = 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations';
        macro.ctx.env.revision_id = 1225673;
        return assert.eventually.equal(
            macro.call("增加关键帧","100%","250"),
            '<iframe class="live-sample-frame sample-code-frame"' +
            ' id="frame_增加关键帧" frameborder="0"' +
            ' width="100%" height="250"' +
            ' src="https://mdn.mozillademos.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations$samples/增加关键帧?revision=1225673">' +
            '</iframe>'
        );
    });
    itMacro('Three arguments: url-encoded ID, width, height', function (macro) {
        macro.ctx.env.url = 'https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage';
        macro.ctx.env.revision_id = 1408763;
        return assert.eventually.equal(
            macro.call("%E4%B8%80%E4%B8%AA%E6%A8%A1%E6%9D%BF%E9%AA%A8%E6%9E%B6", 160, 160),
            '<iframe class="live-sample-frame sample-code-frame"' +
            ' id="frame_%E4%B8%80%E4%B8%AA%E6%A8%A1%E6%9D%BF%E9%AA%A8%E6%9E%B6" frameborder="0"' +
            ' width="160" height="160"' +
            ' src="https://mdn.mozillademos.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage$samples/%E4%B8%80%E4%B8%AA%E6%A8%A1%E6%9D%BF%E9%AA%A8%E6%9E%B6?revision=1408763">' +
            '</iframe>'
        );
    });
    itMacro('Four arguments: ID, width, height, ""', function (macro) {
        macro.ctx.env.url = 'https://developer.mozilla.org/en-US/docs/Web/CSS/::before';
        macro.ctx.env.revision_id = 1392665;
        return assert.eventually.equal(
            macro.call('Adding_quotation_marks', '500', '50', ''),
            '<iframe class="live-sample-frame sample-code-frame"' +
            ' id="frame_Adding_quotation_marks" frameborder="0"' +
            ' width="500" height="50"' +
            ' src="https://mdn.mozillademos.org/en-US/docs/Web/CSS/::before$samples/Adding_quotation_marks?revision=1392665">' +
            '</iframe>'
        );
    });
    itMacro('Four arguments: ID, width, height, screenshot', function (macro) {
        macro.ctx.env.url = 'https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients';
        macro.ctx.env.revision_id = 1330830;
        return assert.eventually.equal(
            macro.call('SVGLinearGradient','120','240','/files/722/SVG_Linear_Gradient_Example.png'),
            '<table class="sample-code-table"><thead><tr>' +
            '<th scope="col" style="text-align: center;">Screenshot</th>' +
            '<th scope="col" style="text-align: center;">Live sample</th>' +
            '</tr></thead>' +
            '<tbody><tr><td>' +
            '<img alt="" class="internal" src="/files/722/SVG_Linear_Gradient_Example.png" />' +
            '</td><td>' +
            '<iframe class="live-sample-frame sample-code-frame" ' +
            'id="frame_SVGLinearGradient" frameborder="0"' +
            ' width="120" height="240"' +
            ' src="https://mdn.mozillademos.org/en-US/docs/Web/SVG/Tutorial/Gradients$samples/SVGLinearGradient?revision=1330830">' +
            '</iframe></td></tr></tbody></table>'
        );
    });
    const same_slug_iframe = (
        '<iframe class="live-sample-frame sample-code-frame"' +
        ' id="frame_Examples" frameborder="0"' +
        ' width="700px" height="700px"' +
        ' src="https://mdn.mozillademos.org/en-US/docs/Web/CSS/flex-wrap$samples/Examples?revision=1367874">' +
        '</iframe>'
    );
    itMacro('Five arguments: ID, width, height, "", same slug', function (macro) {
        macro.ctx.env.url = 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap';
        macro.ctx.env.revision_id = 1367874;
        return assert.eventually.equal(
            macro.call('Examples', '700px', '700px', '', 'Web/CSS/flex-wrap'),
            same_slug_iframe
        );
    });
    itMacro('Three arguments: ID, width, height (same as Five arg, same slug)', function (macro) {
        macro.ctx.env.url = 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap';
        macro.ctx.env.revision_id = 1367874;
        return assert.eventually.equal(
            macro.call('Examples', '700px', '700px'),
            same_slug_iframe
        );
    });
    itMacro('Five arguments: ID, "", "", "", other slug', function (macro) {
        macro.ctx.env.url = 'https://developer.mozilla.org/en-US/docs/Web/Events/focus';
        macro.ctx.env.revision_id = 1348946;
        return assert.eventually.equal(
            macro.call('Event_delegation', '', '', '', 'Web/Events/blur'),
            '<iframe class="live-sample-frame sample-code-frame"' +
            ' id="frame_Event_delegation" frameborder="0"' +
            ' src="https://mdn.mozillademos.org/en-US/docs/Web/Events/blur$samples/Event_delegation?revision=1348946">' +
            '</iframe>'
        );
    });
    itMacro('Six arguments: ID, width, height, "", "", class', function (macro) {
        macro.ctx.env.url = 'https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance';
        macro.ctx.env.revision_id = 1402877;
        return assert.eventually.equal(
            macro.call("sampleNone",100,50,"","", "nobutton"),
            '<iframe class="live-sample-frame nobutton"' +
            ' id="frame_sampleNone" frameborder="0"' +
            ' width="100" height="50"' +
            ' src="https://mdn.mozillademos.org/en-US/docs/Web/CSS/-moz-appearance$samples/sampleNone?revision=1402877">' +
            '</iframe>'
        );
    });
});
