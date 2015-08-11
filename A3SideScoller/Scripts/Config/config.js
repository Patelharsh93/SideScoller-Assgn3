var config;
(function (config) {
    // font constants
    config.FONT_FAMILY = "Consolas";
    config.FONT_SMALL = "20px";
    config.FONT_MEDIUM = "40px";
    config.FONT_LARGE = "60px";
    config.FONT_EXTRA_LARGE = "80px";
    // colour constants
    config.WHITE = "#FFFFFF";
    config.BLACK = "#000000";
    config.YELLOW = "#FFFF00";
    config.RED = "#FF0000";
    config.GREEN = "#00FF00";
    config.BLUE = "#0000FF";
    //states constants
    config.START_STATE = 0;
    config.INSTRUCTION_STATE = 1;
    config.PLAY_STATE = 2;
    config.PLAY_EASY_STATE = 3;
    config.PLAY_HARD_STATE = 4;
    config.END_STATE = 5;
    // key constants
    config.KEY_BACK = 37;
    config.KEY_FORWARD = 39;
    config.KEY_UP = 38;
    config.KEY_DOWN = 40;
    config.KEY_SPACE = 32;
    config.KEY_A = 65;
    config.KEY_S = 83;
    config.KEY_D = 68;
    config.KEY_W = 87;
    // control constants
    config.FORWARD = false;
    config.BACK = false;
    config.UP = false;
    config.DOWN = false;
    config.FIRING = false;
    // PlayerControl constants
    config.PLAYER_MOVEMENT = 5;
    config.PLAYER_UP = 5;
    config.PLAYER_DOWN = 5;
    // bullet constants
    config.BULLET_SPEED = 10;
})(config || (config = {}));
//# sourceMappingURL=config.js.map