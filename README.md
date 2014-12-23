#grunt-sling-cq5

##Install

- Ensure you have node and npm installed:  http://nodejs.org/download/ 
 
 $ node --version
  
v0.10.32

  $ npm -version
  
  1.4.28

- With node/npm installed, make sure you have grunt: npm install -g grunt
  
$ grunt --version

  grunt-cli v0.1.13 

- Copy gruntfile.js and package.json to the root of your svn src directory (e.g. /c/work/src/MR_DEV/TASK-Mobile/CQ5Workspace or C:\work\src\MR_DEV\TASK-Mobile\CQ5Workspace) 

- In the same directory as your gruntfile and package.json, run 
  npm install
This will create the node dependencies in a subfolder called node_modules

- Modify gruntfile.js in your favorite text editor: http://www.sublimetext.com/3
to reflect the directories with files you want to sling

      jcrRoot: '../uhc_member/ui/src/main/content/jcr_root/',

      projectDesigns: '../etc/designs/uhc-common/mobileaarp/member/mobileuhcm/'

- Run the grunt command in the directory with your gruntfile and node modules subfolder:

  grunt

This will send some output to the screen and will run the continuous process watching your directories and slinging changes to CQ5.

When you save a file in the specified directory, you should see something like this in your terminal.

Waiting...

>> File "uhc_member\ui\src\main\content\jcr_root\apps\member\components\content\registration\personalidentificationpage.
jsp" changed.

Running "slang:publish" (slang) task
create folder: /apps
create folder: /apps/member
create folder: /apps/member/components
create folder: /apps/member/components/content
create folder: /apps/member/components/content/registration
file: uhc_member\ui\src\main\content\jcr_root\apps\member\components\content\registration\personalidentificationpage.jsp

slang to: /apps/member/components/content/registration/personalidentificationpage.jsp
in sling
finished slinging

Running "watch:publish" (watch) task
Completed in 1.382s at Mon Dec 22 2014 18:49:00 GMT-0500 (Eastern Standard Time) - Waiting...

This is provided AS IS -- run at your own risk, etc.  

P.S. Windows users try running in Git Bash instead of cmd if you are having issues

##Source
This is a an implementation of: https://github.com/mnlsn/grunt-slang 
with modified gruntfile from https://gist.github.com/davidensinger/4c9a06f2e547b458e089
found at http://www.citytechinc.com/us/en/blog/2014/11/five-good-reasons-to-use-grunt.html
