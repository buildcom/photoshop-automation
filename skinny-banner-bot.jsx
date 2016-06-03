// Hello Word Script
// Remember current unit settings and then set units to
// the value expected by this script
var originalUnit = preferences.rulerUnits
preferences.rulerUnits = Units.PIXELS

// Create a new 2x4 inch document and assign it to a variable
var docRef = app.documents.add(640, 115)

// Create a new art layer containing text
var artLayerRef = docRef.artLayers.add()
artLayerRef.kind = LayerKind.TEXT

// Set the contents of the text layer.
var textItemRef = artLayerRef.textItem
textItemRef.contents = prompt("Enter your name : ", "Your Name");

// Release references
docRef = null
artLayerRef = null
textItemRef = null

// Restore original ruler unit setting
app.preferences.rulerUnits = originalUnit