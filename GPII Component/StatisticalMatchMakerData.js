//This file is generated by the statistical analysis module. Manual changes are discarded
//Truncated version "review2014"
var fluid = require("infusion");
var stat = fluid.registerNamespace("gpii.matchMaker.statistical");
stat.data = {
	"org.gnome.desktop.a11y.magnifier": [
		{
			"key": "preferences.display.screenEnhancement.tracking",
			"value": '["mouse"]'
		},
		{
			"key": "preferences.display.screenEnhancement.invertImages",
			"value": false
		},
		{
			"key": "preferences.display.screenEnhancement.magnification",
			"value": 'parameters["mag-factor"] * 1.32'
		},
		{
			"key": "preferences.display.screenEnhancement.-provisional-showCrosshairs",
			"value": 'parameters["show-cross-hairs"]'
		},
		{
			"key": "preferences.display.screenEnhancement.-provisional-magnifierPosition",
			"data": {
				"full-screen": "FullScreen",
				"left-half": "LeftHalf",
				"right-half": "RightHalf",
				"top-half": "TopHalf",
				"bottom-half": "BottomHalf"
				},
			"value": 'data[parameters["screen-position"]]'
		}
	],
	"com.microsoft.windows.magnifier": [
		{
			"key": "preferences.display.screenEnhancement.tracking",
			"value": 'if (parameters["FollowMouse"]["value"]) { "mouse" } else if (parameters["FollowCaret"]["value"]) { "caret" } else if (parameters["FollowFocus"]["value"]) { "focus" }'
		},
		{
			"key": "preferences.display.screenEnhancement.invertImages",
			"value": 'parameters["Invert"]["value"]'
		},
		{
			"key": "preferences.display.screenEnhancement.magnification",
			"value": 'parameters["Magnification"]["value"] / 100'
		},
		{
			"key": "preferences.display.screenEnhancement.-provisional-magnifierPosition",
			"data": {
				1: "TopHalf",
				2: "FullScreen",
				3: "Lens"
				},
			"value": 'data[parameters["MagnificationMode"]["value"]]'
		}
	],
	"com.microsoft.windows.highContrast": [
		{
			"key": "preferences.display.screenEnhancement.highContrast",
			"value": 'parameters["HighContrastOn"]["value"]'
		}
	],
	"com.microsoft.windows.cursors": [
		{
			"key": "preferences.display.screenEnhancement.cursorSize",
			"data": {
				"%SystemRoot%\\cursors\\aero_arrow.cur": 0.32,
				"%SystemRoot%\\cursors\\aero_arrow_l.cur": 0.65,
				"%SystemRoot%\\cursors\\aero_arrow_xl.cur": 1
				},
			"value": 'data[parameters["Arrow"]["value"]]'
		}
	],
	"org.gnome.desktop.interface": [
		{
			"key": "preferences.display.screenEnhancement.fontSize",
			"value": 'parameters["text-scaling-factor"] * 12'
		},
		{
			"key": "preferences.display.screenEnhancement.cursorSize",
			"value": 'parameters["cursor-size"] * 0.01'
		},
		{
			"key": "preferences.display.screenEnhancement.-provisional-highContrastEnabled",
			"value": 'parameters["gtk-theme"] == "HighContrast"'
		}
	],
	"org.gnome.orca": [
		{
			"key": "preferences.display.screenReader.-provisional-speakTutorialMessages",
			"value": 'parameters["enableTutorialMessages"]'
		},
		{
			"key": "preferences.display.screenReader.-provisional-keyEcho",
			"value": 'parameters["enableEchoByCharacter"]'
		},
		{
			"key": "preferences.display.screenReader.-provisional-wordEcho",
			"value": 'parameters["enableEchoByWord"]'
		},
		{
			"key": "preferences.display.screenReader.-provisional-screenReaderBrailleOutput",
			"value": 'parameters["enableBraille"]'
		},
		{
			"key": "preferences.display.screenReader.-provisional-screenReaderTTSEnabled",
			"value": 'parameters["enableSpeech"]'
		},
		{
			"key": "preferences.display.textReadingHighlight.readingUnit",
			"data": {
				1: "line",
				2: "sentence"
				},
			"value": 'data[parameters["sayAllStyle"]]'
		},
		{
			"key": "preferences.display.screenReader.speechRate",
			"data": {
				true: 1.8,
				false: 4.4
				},
			"value": '((parameters["voices\\.default\\.rate"] - 50) * data[parameters["voices\\.default\\.rate"] < 170] + 170) * 0.77'
		},
		{
			"key": "preferences.display.screenReader.-provisional-punctuationVerbosity",
			"data": {
				0: "all",
				1: "most",
				2: "some",
				3: "none"
				},
			"value": 'data[parameters["verbalizePunctuationStyle"]]'
		}
	],
	"org.nvda-project": [
		{
			"key": "preferences.display.screenReader.-provisional-speakTutorialMessages",
			"value": 'parameters["presentation\\.reportHelpBalloons"]'
		},
		{
			"key": "preferences.display.screenReader.-provisional-keyEcho",
			"value": 'parameters["keyboard\\.speakTypedCharacters"]'
		},
		{
			"key": "preferences.display.screenReader.-provisional-screenReaderTTSEnabled",
			"data": {
				true: false,
				false: true
				},
			"value": 'data[parameters["speech\\.synth"] == "silence" && parameters["speech\\.outputDevice"] == "Microsoft Sound Mapper"]'
		},
		{
			"key": "preferences.display.screenReader.-provisional-wordEcho",
			"value": 'parameters["keyboard\\.speakTypedWords"]'
		},
		{
			"key": "preferences.display.screenReader.-provisional-announceCapitals",
			"value": 'parameters["speech\\.espeak\\.sayCapForCapitals"]'
		},
		{
			"key": "preferences.display.textReadingHighlight.readingUnit",
			"data": {
				true: "all",
				false: "sentence"
				},
			"value": 'data[parameters["virtualBuffers\\.autoSayAllOnPageLoad"]]'
		},
		{
			"key": "preferences.display.screenReader.speechRate",
			"data": {
				true: 1,
				false: 3
				},
			"value": '(parameters["speech\\.espeak\\.rate"] * 3.1 + 80) * data[parameters["speech\\.espeak\\.rate"] <= 390]'
		},
		{
			"key": "preferences.display.screenReader.-provisional-punctuationVerbosity",
			"data": {
				0: "none",
				1: "some",
				2: "most",
				3: "all"
				},
			"value": 'data[round(parameters["speech\\.symbolLevel"] / 100)]'
		}
	],
	"com.microsoft.windows.highContrast": [
		{
			"key": "display.screenEnhancement.-provisional-highContrastEnabled",
			"value": 'parameters["HighContrastOn"]["value"]'
		}
	],
	"org.gnome.nautilus": [
		{
			"key": "display.screenEnhancement.fontFace.fontName.0",
			"value": 'parameters["font"]'
		}
	],
	"org.chrome.cloud4chrome": [
		{
			"key": "display.screenReader.-provisional-screenReaderTTSEnabled",
			"value": 'parameters["screenReaderTTSEnabled"]'
		},
		{
			"key": "display.screenEnhancement.fontSize",
			"data": {
				"small": 9,
				"medium": 12,
				"large": 18,
				"x-large": 24
				},
			"value": 'data[parameters["fontSize"]]'
		},
		{
			"key": "display.screenEnhancement.-provisional-magnifierEnabled",
			"value": 'parameters["magnifierEnabled"]'
		},
		{
			"key": "display.screenEnhancement.magnification",
			"value": 'parameters["magnification"]'
		},
		{
			"key": "display.screenEnhancement.-provisional-highContrastEnabled",
			"value": 'parameters["highContrastEnabled"]'
		},
		{
			"key": "display.screenEnhancement.-provisional-highContrastTheme",
			"value": 'parameters["highContrastTheme"]'
		},
		{
			"key": "display.screenEnhancement.-provisional-invertColours",
			"value": 'parameters["invertColours"]'
		}
	],
	"com.android.activitymanager": [
		{
			"key": "display.screenEnhancement.fontSize",
			"value": 'parameters["text-scaling-factor"] * 12'
		}
	]
}
