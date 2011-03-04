<h1>CamanDrop</h1>

<h2>About the Project</h2>
Easily apply preset filters from CamanJS to any image! Watches a special folder and automatically converts any image placed in the desired filter folder.

<b>Note: this is alpha software and was hacked together in an hour or so. It may or may not work as intended. Improvements will come over time.</b>

<h2>How to Use</h2>

First, edit the config.json file to your liking. The only thing you will probably have to change is the folder variable, which is the base folder for CamanDrop. If the folder doesn't exist, it will be created automatically.

Then run CamanDrop from the bin folder by simply doing:

<pre>
./CamanDrop start
</pre>

which will start CamanDrop in daemon mode. You can also do:

<pre>
./CamanDrop no-daemon
</pre>

to start CamanDrop without daemonizing. This will print to the console debugging messages from Caman and CamanDrop. If you close the console window, it will quit CamanDrop unless it's daemonized.

Once CamanDrop is running, drag and drop any images into any of the folders created under the filters subdirectory and the images will be rendered. The rendered image will be put into renders/ and the original will be moved to originals/.

<h2>Dependencies</h2>
First and foremost, you must have NodeJS installed.

All of these NodeJS modules are available via npm:

* canvas
* caman
* watch
* daemon-tools