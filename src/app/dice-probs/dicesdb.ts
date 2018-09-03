import { Dice, Side, Symbol } from './dice';
export class DicesDB {

    BLANK = new Side(Symbol.Blank, 0, 0, false);
    SPECIAL = new Side(Symbol.Special, 0, 0, false);
    SPECIAL_PAID = new Side(Symbol.Special, 0, 1, false);

    ONE_RANGED = new Side(Symbol.Ranged, 1, 0, false);
    ONE_RANGED_MOD = new Side(Symbol.Ranged, 1, 0, true);
    TWO_RANGED = new Side(Symbol.Ranged, 2, 0, false);
    TWO_RANGED_PAID = new Side(Symbol.Ranged, 2, 1, false);
    TWO_RANGED_MOD = new Side(Symbol.Ranged, 2, 0, true);
    THREE_RANGED = new Side(Symbol.Ranged, 3, 0, false);
    THREE_RANGED_PAID = new Side(Symbol.Ranged, 3, 1, false);
    THREE_RANGED_MOD = new Side(Symbol.Ranged, 3, 0, true);
    FOUR_RANGED = new Side(Symbol.Ranged, 4, 0, false);
    FIVE_RANGED_PAID = new Side(Symbol.Ranged, 5, 1, false);
    X_RANGED = new Side(Symbol.Ranged, -1, 0, false);

    ONE_MELEE = new Side(Symbol.Melee, 1, 0, false);
    ONE_MELEE_MOD = new Side(Symbol.Melee, 1, 0, true);
    TWO_MELEE = new Side(Symbol.Melee, 2, 0, false);
    TWO_MELEE_PAID = new Side(Symbol.Melee, 2, 1, false);
    TWO_MELEE_MOD = new Side(Symbol.Melee, 2, 0, true);
    THREE_MELEE = new Side(Symbol.Melee, 3, 0, false);
    THREE_MELEE_PAID = new Side(Symbol.Melee, 3, 1, false);
    THREE_MELEE_MOD = new Side(Symbol.Melee, 3, 0, true);
    FOUR_MELEE_PAID = new Side(Symbol.Melee, 4, 1, false);

    ONE_FOCUS = new Side(Symbol.Focus, 1, 0, false);
    TWO_FOCUS = new Side(Symbol.Focus, 2, 0, false);
    THREE_FOCUS = new Side(Symbol.Focus, 3, 0, false);

    ONE_DISCARD = new Side(Symbol.Discard, 1, 0, false);
    TWO_DISCARD = new Side(Symbol.Discard, 2, 0, false);
    THREE_DISCARD = new Side(Symbol.Discard, 3, 0, false);
    X_DISCARD = new Side(Symbol.Discard, -1, 0, false);

    ONE_DISRUPT = new Side(Symbol.Disrupt, 1, 0, false);
    TWO_DISRUPT = new Side(Symbol.Disrupt, 2, 0, false);
    TWO_DISRUPT_PAID = new Side(Symbol.Disrupt, 2, 1, false);
    THREE_DISRUPT = new Side(Symbol.Disrupt, 3, 0, false);
    THREE_DISRUPT_PAID = new Side(Symbol.Disrupt, 3, 1, false);
    X_DISRUPT = new Side(Symbol.Disrupt, -1, 0, false);

    ONE_RESOURCE = new Side(Symbol.Resource, 1, 0, false);
    ONE_RESOURCE_MOD = new Side(Symbol.Resource, 1, 0, true);
    TWO_RESOURCE = new Side(Symbol.Resource, 2, 0, false);

    ONE_SHIELD = new Side(Symbol.Shield, 1, 0, false);
    TWO_SHIELD = new Side(Symbol.Shield, 2, 0, false);
    THREE_SHIELD = new Side(Symbol.Shield, 3, 0, false);
    FOUR_SHIELD = new Side(Symbol.Shield, 4, 0, false);
    X_SHIELD = new Side(Symbol.Shield, -1, 0, false);

    awakings = [
        // 01
        new Dice([this.ONE_RANGED, this.TWO_RANGED, this.ONE_FOCUS,
                  this.ONE_DISCARD, this.ONE_RESOURCE, this.BLANK]),
        // 02
        new Dice([this.ONE_RANGED, this.TWO_RANGED, this.TWO_RANGED_PAID,
                  this.ONE_RESOURCE, this.BLANK, this.BLANK]),
        // 03
        new Dice([this.TWO_MELEE, this.TWO_MELEE, this.THREE_MELEE_PAID,
                  this.ONE_DISRUPT, this.ONE_RESOURCE, this.BLANK]),
        // 04
        new Dice([this.ONE_RANGED, this.TWO_RANGED, this.TWO_RANGED_MOD,
                  this.ONE_SHIELD, this.ONE_RESOURCE, this.BLANK]),
        // 05
        new Dice([this.THREE_RANGED, this.FOUR_RANGED, this.FIVE_RANGED_PAID,
            this.TWO_SHIELD, this.SPECIAL, this.SPECIAL]),
        // 06
        new Dice([this.ONE_RANGED, this.TWO_RANGED, this.THREE_RANGED_PAID,
            this.ONE_DISRUPT, this.SPECIAL, this.BLANK]),
        // 07
        new Dice([this.ONE_FOCUS, this.TWO_FOCUS, this.TWO_DISRUPT,
            this.ONE_RESOURCE, this.SPECIAL, this.SPECIAL]),
        // 08
        new Dice([this.TWO_RANGED_PAID, this.ONE_RANGED_MOD, this.TWO_RANGED_MOD,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 09
        new Dice([this.ONE_MELEE, this.TWO_MELEE, this.ONE_FOCUS,
            this.TWO_DISRUPT_PAID, this.ONE_RESOURCE, this.BLANK]),
        // 10
        new Dice([this.TWO_MELEE, this.THREE_MELEE, this.TWO_DISRUPT,
            this.ONE_SHIELD, this.ONE_RESOURCE, this.BLANK]),
        // 11
        new Dice([this.ONE_MELEE, this.TWO_MELEE_PAID, this.ONE_SHIELD,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 12
        new Dice([this.ONE_RANGED, this.TWO_RANGED, this.ONE_DISRUPT,
            this.ONE_DISCARD, this.ONE_RESOURCE, this.BLANK]),
        // 13
        new Dice([this.TWO_DISRUPT, this.ONE_DISCARD, this.ONE_RESOURCE,
            this.SPECIAL, this.SPECIAL, this.BLANK]),
        // 14
        new Dice([this.ONE_DISRUPT, this.ONE_SHIELD, this.ONE_SHIELD,
            this.TWO_SHIELD, this.ONE_RESOURCE, this.BLANK]),
        // 15
        new Dice([this.THREE_MELEE_PAID, this.TWO_MELEE_MOD, this.THREE_MELEE_MOD,
            this.ONE_SHIELD, this.SPECIAL, this.BLANK]),
        // 16
        new Dice([this.ONE_FOCUS, this.ONE_RESOURCE_MOD, this.SPECIAL,
            this.SPECIAL, this.BLANK, this.BLANK]),
        // 17
        new Dice([this.ONE_RANGED, this.TWO_RANGED_PAID, this.ONE_RESOURCE,
            this.SPECIAL, this.BLANK, this.BLANK]),
        // 18
        new Dice([this.TWO_RANGED, this.THREE_RANGED_PAID, this.ONE_DISRUPT,
            this.ONE_SHIELD, this.SPECIAL, this.BLANK]),
        // 19
        new Dice([this.ONE_RANGED, this.TWO_RANGED_MOD, this.ONE_FOCUS,
            this.ONE_SHIELD, this.ONE_RESOURCE, this.BLANK]),
        // 20
        new Dice([this.ONE_FOCUS, this.ONE_FOCUS, this.TWO_DISRUPT,
            this.TWO_DISCARD, this.ONE_RESOURCE, this.BLANK]),
        // 21
        new Dice([this.ONE_RANGED, this.TWO_RANGED, this.ONE_MELEE,
            this.ONE_RESOURCE, this.ONE_RESOURCE_MOD, this.BLANK]),
        // 22
        new Dice([this.ONE_RANGED, this.ONE_MELEE, this.THREE_MELEE_PAID,
            this.ONE_SHIELD, this.ONE_RESOURCE, this.BLANK]),
        // 23
        new Dice([this.TWO_FOCUS, this.THREE_DISRUPT_PAID, this.TWO_SHIELD,
            this.TWO_RESOURCE, this.SPECIAL, this.SPECIAL]),
        // 24
        new Dice([this.TWO_MELEE, this.FOUR_MELEE_PAID, this.ONE_DISRUPT,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 25
        new Dice([this.TWO_MELEE_PAID, this.TWO_MELEE_MOD, this.ONE_DISRUPT,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 26
        new Dice([this.ONE_RANGED_MOD, this.ONE_MELEE_MOD, this.ONE_DISCARD,
            this.SPECIAL, this.SPECIAL, this.BLANK]),
        // 27
        new Dice([this.ONE_RANGED, this.TWO_FOCUS, this.ONE_DISCARD,
            this.ONE_RESOURCE, this.ONE_RESOURCE, this.BLANK]),
        // 28
        new Dice([this.ONE_RANGED, this.TWO_RANGED, this.TWO_RANGED_PAID,
            this.ONE_FOCUS, this.ONE_RESOURCE, this.BLANK]),
        // 29
        new Dice([this.TWO_RANGED, this.THREE_RANGED_PAID, this.ONE_DISRUPT,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 30
        new Dice([this.ONE_RANGED, this.TWO_RANGED, this.ONE_RANGED_MOD,
            this.ONE_SHIELD, this.ONE_RESOURCE, this.BLANK]),
        // 31
        new Dice([this.X_RANGED, this.X_RANGED, this.X_DISRUPT,
            this.X_SHIELD, this.X_DISCARD, this.BLANK]),
        // 32
        new Dice([this.TWO_RANGED, this.THREE_RANGED, this.ONE_DISRUPT,
            this.TWO_SHIELD, this.SPECIAL, this.BLANK]),
        // 33
        new Dice([this.ONE_FOCUS, this.TWO_DISRUPT_PAID, this.ONE_RESOURCE,
            this.SPECIAL, this.SPECIAL, this.BLANK]),
        // 34
        new Dice([this.ONE_MELEE, this.ONE_FOCUS, this.ONE_SHIELD,
            this.TWO_SHIELD, this.ONE_RESOURCE, this.ONE_RESOURCE_MOD]),
        // 35
        new Dice([this.TWO_MELEE, this.THREE_MELEE, this.ONE_FOCUS,
            this.ONE_SHIELD, this.ONE_RESOURCE, this.BLANK]),
        // 36
        new Dice([this.ONE_MELEE, this.ONE_MELEE, this.TWO_MELEE,
            this.ONE_FOCUS, this.ONE_RESOURCE, this.BLANK]),
        // 37
        new Dice([this.ONE_MELEE, this.TWO_MELEE, this.ONE_SHIELD,
            this.TWO_SHIELD, this.ONE_RESOURCE, this.BLANK]),
        // 38
        new Dice([this.ONE_MELEE, this.TWO_MELEE_MOD, this.ONE_DISCARD,
            this.ONE_RESOURCE, this.ONE_RESOURCE_MOD, this.BLANK]),
        // 39
        new Dice([this.ONE_DISRUPT, this.ONE_DISCARD, this.ONE_RESOURCE,
            this.SPECIAL, this.SPECIAL, this.BLANK]),
        // 40
        new Dice([this.ONE_FOCUS, this.ONE_FOCUS, this.ONE_DISRUPT,
            this.ONE_RESOURCE, this.ONE_RESOURCE_MOD, this.BLANK]),
        // 41
        new Dice([this.THREE_MELEE_PAID, this.THREE_MELEE_MOD, this.TWO_SHIELD,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 42
        new Dice([this.THREE_RANGED, this.TWO_FOCUS, this.THREE_FOCUS,
            this.THREE_DISRUPT, this.TWO_SHIELD, this.TWO_RESOURCE]),
        // 43
        new Dice([this.ONE_FOCUS, this.ONE_DISRUPT, this.ONE_SHIELD,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 44
        new Dice([this.ONE_MELEE, this.ONE_MELEE, this.THREE_MELEE_PAID,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 45
        new Dice([this.ONE_RANGED, this.TWO_RANGED, this.ONE_MELEE,
            this.ONE_SHIELD, this.ONE_RESOURCE, this.BLANK]),
        // 46
        new Dice([this.TWO_RANGED, this.THREE_RANGED_PAID, this.TWO_DISRUPT,
            this.ONE_RESOURCE, this.ONE_RESOURCE, this.BLANK]),
        // 47
        new Dice([this.TWO_RANGED_PAID, this.THREE_RANGED_PAID, this.ONE_DISRUPT,
            this.ONE_RESOURCE, this.ONE_RESOURCE, this.BLANK]),
        // 48
        new Dice([this.TWO_FOCUS, this.ONE_DISCARD, this.ONE_RESOURCE,
            this.SPECIAL, this.SPECIAL, this.BLANK]),
        // 49
        new Dice([this.THREE_RANGED, this.FOUR_RANGED, this.TWO_FOCUS,
            this.THREE_DISCARD, this.TWO_RESOURCE, this.SPECIAL]),
        // 50
        new Dice([this.TWO_FOCUS, this.ONE_SHIELD, this.TWO_SHIELD,
            this.THREE_SHIELD, this.FOUR_SHIELD, this.TWO_DISRUPT]),
        // 51
        new Dice([this.THREE_RANGED, this.THREE_RANGED_PAID, this.TWO_RANGED_MOD,
            this.ONE_RESOURCE, this.BLANK, this.BLANK]),
        // 52
        new Dice([this.ONE_DISRUPT, this.ONE_SHIELD, this.ONE_RESOURCE,
            this.SPECIAL, this.SPECIAL, this.BLANK]),
        // 53
        new Dice([this.ONE_FOCUS, this.ONE_DISRUPT, this.TWO_DISRUPT,
            this.ONE_SHIELD, this.SPECIAL, this.BLANK]),
        // 54
        new Dice([this.ONE_RANGED, this.TWO_RANGED_PAID, this.TWO_RANGED_MOD,
            this.ONE_SHIELD, this.BLANK, this.BLANK]),
        // 55
        new Dice([this.TWO_RANGED, this.THREE_RANGED_MOD, this.ONE_DISRUPT,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 56
        new Dice([this.ONE_RANGED_MOD, this.ONE_MELEE_MOD, this.ONE_FOCUS,
            this.ONE_SHIELD, this.ONE_RESOURCE, this.BLANK]),
        // 57
        new Dice([this.ONE_RANGED, this.ONE_DISRUPT, this.TWO_DISRUPT,
            this.SPECIAL, this.SPECIAL, this.BLANK]),
        // 58
        new Dice([this.ONE_RANGED, this.TWO_MELEE_MOD, this.ONE_FOCUS,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 59
        new Dice([this.THREE_MELEE_PAID, this.TWO_MELEE_MOD, this.ONE_SHIELD,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 60
        new Dice([this.THREE_RANGED_PAID, this.TWO_DISRUPT, this.TWO_DISCARD,
            this.SPECIAL, this.SPECIAL, this.BLANK]),
        // 61
        new Dice([this.ONE_FOCUS, this.ONE_FOCUS, this.ONE_SHIELD,
            this.ONE_RESOURCE, this.ONE_RESOURCE_MOD, this.BLANK]),
        // 62
        new Dice([this.ONE_RESOURCE, this.ONE_RESOURCE_MOD, this.ONE_RESOURCE_MOD,
            this.SPECIAL, this.BLANK, this.BLANK]),
        // 63
        new Dice([this.ONE_RANGED, this.TWO_RANGED_PAID, this.TWO_RANGED_MOD,
            this.ONE_SHIELD, this.ONE_RESOURCE, this.BLANK]),
        // 64
        new Dice([this.TWO_RANGED_MOD, this.TWO_FOCUS, this.TWO_SHIELD,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 65
        new Dice([this.ONE_FOCUS, this.ONE_DISRUPT, this.ONE_DISCARD,
            this.ONE_RESOURCE, this.SPECIAL, this.BLANK]),
        // 66
        new Dice([this.TWO_RANGED_MOD, this.THREE_RANGED_MOD, this.ONE_DISRUPT,
            this.TWO_SHIELD, this.SPECIAL, this.BLANK]),
        // 67
        new Dice([this.ONE_DISCARD, this.TWO_DISCARD, this.ONE_RESOURCE,
            this.SPECIAL, this.SPECIAL_PAID, this.BLANK])
    ];

}


