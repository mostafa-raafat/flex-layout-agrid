export const MainLayout = {
    global: {
        "tabEnableFloat": true
    },
    layout: {
        "type": "row",
        "weight": 100,
        "children": [
            {
                "type": "tabset",
                "weight": 30,
                "selected": 0,
                "children": [
                    {
                        "type": "tab",
                        "name": "AddCall",
                        "component": "AddCall"
                    }
                ]
            },
            {
				"type": "row",
				"id": "#13",
				"weight": 70,
				"children": [
                    {
                        "type": "tabset",
                        "weight": 50,
                        "selected": 0,
                        "children": [
                            {
                                "type": "tab",
                                "name": "Calls List",
                                "component": "CallsList",
                            }
                        ]
                    },
                    {
                        "type": "tabset",
                        "weight": 50,
                        "selected": 0,
                        "children": [
                            {
                                "type": "tab",
                                "name": "Map",
                                "component": "Map"
                            }
                        ]
                    }
				]
			}
           
        ]
    }
};