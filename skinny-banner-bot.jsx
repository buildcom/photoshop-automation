#target photoshop

var originalUnit = preferences.rulerUnits
preferences.rulerUnits = Units.PIXELS

// Setup the document dimensions
var docRef = app.documents.add(640, 115)
var docRefWidth = docRef.width
var docRefHeight = docRef.height

// Create a new art layer containing text
var artLayerRef = docRef.artLayers.add()
artLayerRef.kind = LayerKind.TEXT

// Set the contents of the text layer.
var textItemRef = artLayerRef.textItem
textItemRef.contents = prompt("Enter your title here: ", "Content");
textItemRef.justification = Justification.CENTER
textItemRef.size = 42

// Position text on document
textItemX = docRefWidth / 2
textItemY = (docRefHeight / 2) + 10
textItemRef.position = [textItemX, textItemY];

// Release references
docRef = null
artLayerRef = null
textItemRef = null

// Where
saveDst = "/Users/sdavis/Desktop/test/image.jpg"

// Save functionality
jpgFile = new File(saveDst)
jpgSaveOptions = new JPEGSaveOptions()
jpgSaveOptions.embedColorProfile = true
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE
jpgSaveOptions.matte = MatteType.NONE
jpgSaveOptions.quality = 5

app.activeDocument.saveAs(jpgFile, jpgSaveOptions, true, Extension.LOWERCASE)