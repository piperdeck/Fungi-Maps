/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // // Example 1: Simple marker
        // {
        //     x: -200,
        //     z: -200,
        //     image: "custom.pin.png",
        //     imageAnchor: [0.5, 1],
        //     imageScale: 0.5,
        // },

        // // Example 2: Marker with text
        // {
        //     x: 0,
        //     z: 0,
        //     image: "custom.pin.png",
        //     imageAnchor: [0.5, 1],
        //     imageScale: 0.5,
        //     text: "Marker with text",
        //     textColor: "red", 
        //     offsetX: 0,
        //     offsetY: 20,
        //     font: "bold 20px Calibri,sans serif",
        // },

        // // Example 3: Text only
        // {
        //     x: 200,
        //     z: 200,
        //     text: "Text only", 
        //     textColor: "yellow", 
        //     offsetX: 0,
        //     offsetY: 0, 
        //     font: "bold 50px Calibri,sans serif",
        // },

        // add your markers here

        //// The Island, centred on Central Park 
        {
            x: 299.5,
            z: 21.5,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "The Island",
            textColor: "white",
            strokeColor: "#000000", 
            offsetX: 0,
            offsetY: 15,
            font: "bold 15px Georgia,serif",
            minmapzoom: 2,
            maxmapzoom: 1,
        },

        //// Iron Farm 
        {
            x: -1099,
            z: -100,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Iron Farm",
            textColor: "white",
            strokeColor: "#000000", 
            offsetX: 0,
            offsetY: 15,
            font: "bold 15px Georgia,serif",
        },


        //// Carlo's Island 
        {
            x: -1064,
            z: 15,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Carlo's Home\nIn Exile",
            textColor: "white",
            strokeColor: "#000000", 
            offsetX: 0,
            offsetY: 15,
            font: "bold 15px Georgia,serif",
        },


        //// Cave Spider XP Farm 
        {
            x: 2320,
            z: -571,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Cave Spider\nXP Farm",
            textColor: "white",
            strokeColor: "#000000", 
            offsetX: 0,
            offsetY: 15,
            font: "bold 15px Georgia,serif",
        },


        //// Ice Quarry 
        {
            x: -4437,
            z: -6929,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Ice Quarry",
            textColor: "white",
            strokeColor: "#000000", 
            offsetX: 0,
            offsetY: 15,
            font: "bold 15px Georgia,serif",
        },


        //// Monster Grinder 
        {
            x: 1609,
            z: 715,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Monster Grinder",
            textColor: "white",
            strokeColor: "#000000", 
            offsetX: 0,
            offsetY: 15,
            font: "bold 15px Georgia,serif",
        },


        //// Floating Mountains 
        {
            x: -365,
            z: -1552,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Cool Floating\nMountains",
            textColor: "white",
            strokeColor: "#000000", 
            offsetX: 0,
            offsetY: 15,
            font: "bold 15px Georgia,serif",
        },


        //// Carlo's Horrible villager farm 
        {
            x: -2246,
            z: -78,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Human Rights\nViolation",
            textColor: "white",
            strokeColor: "#000000", 
            offsetX: 0,
            offsetY: 15,
            font: "bold 15px Georgia,serif",
        },

        //// Burned Woodland Mansion 
        {
            x: 9692,
            z: 9362,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "The Burned\nWoodland Mansion",
            textColor: "white",
            strokeColor: "#000000", 
            offsetX: 0,
            offsetY: 15,
            font: "bold 15px Georgia,serif",
        },

        //// Ice Fields 
        {
            x: 4591,
            z: -6116,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "New Ice Fields",
            textColor: "white",
            strokeColor: "#000000", 
            offsetX: 0,
            offsetY: 15,
            font: "bold 15px Georgia,serif",
        },

        //// Nearby Woodland Mansion 
        {
            x: 511,
            z: 534,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Local\nWoodland Mansion",
            textColor: "white",
            strokeColor: "#000000", 
            offsetX: 0,
            offsetY: 15,
            font: "bold 15px Georgia,serif",
        },


        // do not delete the following two closing brackets
    ]
}
