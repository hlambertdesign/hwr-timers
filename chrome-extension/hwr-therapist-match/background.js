// Clicking the toolbar icon opens the Therapist Match side panel.
// The panel stays open while you click around Zenoti or switch tabs, until you close it.
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(console.error);
