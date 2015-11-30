"use strict";

/*
    In some regions, the night will not be completely dark during some days
    trougout the year, leaving the times of Fajr and Isha (and sometimes Maghrib)
    not defined. To correct for this, the following correction methods exist:

    - Midnight:
        Both Fajr and Isha take place in exactly the middle of the "night"

    - One Seventh:
        Like midnight, but the "night" is split up into 7 equal parts. Isha
        begins after the first part, Fajr during the last part.

    - Angle Based:
        Intermediate method. Fajr starts during the last (fajrAngle/60)th part
        of the "night". Isha starts after the first (ishaAngle/60)th part.
*/

const MIDNIGHT = () => 1 / 2;
const ANGLE_BASED = a => a / 60;
const ONE_SEVENTH = () => 1 / 7;

module.exports = { MIDNIGHT, ANGLE_BASED, ONE_SEVENTH };
