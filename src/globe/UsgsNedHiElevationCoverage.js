/*
 * Copyright 2015-2018 WorldWind Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @exports UsgsNedHiElevationCoverage
 */
define([
        '../geom/Location',
        '../geom/Sector',
        '../globe/TiledElevationCoverage',
        '../util/WmsUrlBuilder'
    ],
    function (Location,
              Sector,
              TiledElevationCoverage,
              WmsUrlBuilder) {
        "use strict";

        /**
         * Constructs an Earth elevation coverage using USGS NED data.
         * @alias UsgsNedHiElevationCoverage
         * @constructor
         * @augments TiledElevationCoverage
         * @classdesc Provides elevations for Earth. Elevations are drawn from the NASA WorldWind elevation service.
         */
        var UsgsNedHiElevationCoverage = function () {
            // Hawaii Extent: (-178.443593, 18.865460) - (-154.755792, 28.517269)
            // TODO: Remove this class when the server NO_DATA value issue is resolved.
            TiledElevationCoverage.call(this,
                new Sector(18.865460, 28.517269, -178.443593, -154.755792), new Location(45, 45), 12, "application/bil16",
                "UsgsNedHiElevations256", 256, 256, 0.000092592592593);

            this.displayName = "USGS NED Hawaii Elevation Coverage";
            this.minElevation = -11000;
            this.maxElevation = 8850;
            this.pixelIsPoint = false;
            this.urlBuilder = new WmsUrlBuilder("https://worldwind26.arc.nasa.gov/elev", "USGS-NED", "", "1.3.0");
        };

        UsgsNedHiElevationCoverage.prototype = Object.create(TiledElevationCoverage.prototype);

        return UsgsNedHiElevationCoverage;
    });