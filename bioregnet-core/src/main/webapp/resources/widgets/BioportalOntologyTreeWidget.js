/**
 * To use this widget you must include the following in your HTML markup
 * <script type="text/javascript"src="http://keg.cs.uvic.ca/ncbo/ontologytree/AC_OETags.js" ></script>
 * Currently this widget is not used, the params and configuration is embedded within 
 * the index.html markup.
 * More instructions for the use of this widget can be found at the link below
 * http://www.bioontology.org/wiki/index.php/NCBO_Widgets#OntologyTree_Widget
 */

// -----------------------------------------------------------------------------
// Globals
// Major version of Flash required
var requiredMajorVersion = 9;
// Minor version of Flash required
var requiredMinorVersion = 0;
// Minor version of Flash required
var requiredRevision = 124;
// -----------------------------------------------------------------------------
// -->

// Version check for the Flash Player that has the ability to start Player Product Install (6.0r65)
var hasProductInstall = DetectFlashVer(6, 0, 65);

// Version check based upon the values defined in globals
var hasRequestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);

if (hasProductInstall && !hasRequestedVersion) {
    // DO NOT MODIFY THE FOLLOWING FOUR LINES
    // Location visited after installation is complete if installation is required
    var MMPlayerType = (isIE == true) ? "ActiveX": "PlugIn";
    var MMredirectURL = window.location;
    document.title = document.title.slice(0, 47) + " - Flash Player Installation";
    var MMdoctitle = document.title;

    AC_FL_RunContent(
    "src", "playerProductInstall",
    "FlashVars", "MMredirectURL=" + MMredirectURL + '&MMplayerType=' + MMPlayerType + '&MMdoctitle=' + MMdoctitle + "",
    "width", "300",
    "height", "100%",
    "align", "middle",
    "id", "OntologyTree",
    "quality", "high",
    "bgcolor", "#ffffff",
    "name", "OntologyTree",
    "allowScriptAccess", "always",
    "type", "application/x-shockwave-flash",
    "pluginspage", "http://www.adobe.com/go/getflashplayer"
    );
} else if (hasRequestedVersion) {
    // if we've detected an acceptable version
    // embed the Flash Content SWF when all tests are passed
    AC_FL_RunContent(
    "src", "http://keg.cs.uvic.ca/ncbo/ontologytree/OntologyTree.swf",
    "width", "300",
    "height", "100%",
    "align", "middle",
    "id", "OntologyTree",
    "quality", "high",
    "bgcolor", "#ffffff",
    "name", "OntologyTree",
    "allowScriptAccess", "always",
    "flashVars", "ontology=&virtual=false&alerterrors=false&canchangeontology=true&rootconceptid=",
    "type", "application/x-shockwave-flash",
    "pluginspage", "http://www.adobe.com/go/getflashplayer"
    );
} else {
    // flash is too old or we can't detect the plugin
    var alternateContent = 'Alternate HTML content should be placed here. '
    + 'This content requires the Adobe Flash Player. '
    + '<a href=http://www.adobe.com/go/getflash/>Get Flash</a>';
    document.write(alternateContent);
    // insert non-flash content
}



