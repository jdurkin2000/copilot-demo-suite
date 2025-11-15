For saving demo code examples for workspace: use ExtensionContext.globalStorageUri?



UI Stuff:

For navigating challenges, add a custom Item to the activity bar that opens up a primary sidebar where a challenges view is displayed

editor shows current challenge code

maybe use panel to add view container where tutorial messages, hints, and stats are displayed??

status bar for user progress info? maybe too small

use notifications to communicate achievments or progress?

USE WALKTHROUGHS

use virtual documents to create a readonly document from challenge source code string?

When starting walkthrough or welcome view, let user know they need github copilot extension and can set it up via instructions linked at https://code.visualstudio.com/docs/copilot/setup

use https://code.visualstudio.com/docs/copilot/ docs as a basis for these tutorials and demos

**Walkthrough steps:**

__Install github copilot:__
link to setup
completion event - extensionInstalled:myExt.id: Check off step if the given extension is installed.

__Click Challenges View:__
provide image of icon
completion event - onView:myView.id: Check off once challenge view is opened


***Sources:***
https://docs.github.com/en/actions/get-started/quickstart
https://code.visualstudio.com/api
