/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2013-2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var BaseFX = require('./BaseFX');
var Class = require('../../utils/Class');
var FX_CONST = require('./const');

/**
 * @classdesc
 *
 * @class Displacement
 * @extends Phaser.GameObjects.FX.BaseFX
 * @memberof Phaser.GameObjects.FX
 * @constructor
 * @since 3.60.0
 *
 * @param {Phaser.GameObjects.GameObject} gameObject - A reference to the Game Object that has this fx.
 */
var Displacement = new Class({

    Extends: BaseFX,

    initialize:

    function Displacement (gameObject)
    {
        BaseFX.call(this, FX_CONST.DISPLACEMENT, gameObject);

        this.x = 0.005;
        this.y = 0.005;

        this.glTexture;

        this.setTexture('__WHITE');
    },

    setTexture: function (texture)
    {
        var phaserTexture = this.gameObject.scene.sys.textures.getFrame(texture);

        if (phaserTexture)
        {
            this.glTexture = phaserTexture.glTexture;
        }
    }

});

module.exports = Displacement;
