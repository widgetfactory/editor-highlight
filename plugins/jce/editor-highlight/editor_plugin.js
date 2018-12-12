(function () {
    var items = {
        "Apache": "apache",
        "Bash": "bash",
        "C#": "c#",
        "C++": "c++",
        "CSS": "css",
        "CoffeeScript": "coffeescript",
        "Diff": "diff",
        "HTML": "html",
        "XML": "xml",
        "HTTP": "http",
        "Ini": "ini",
        "TOML": "toml",
        "JSON": "json",
        "Java": "java",
        "JavaScript": "javascript",
        "Makefile": "makefile",
        "Markdown": "markdown",
        "Nginx": "nginx",
        "Objective-C": "objective-c",
        "PHP": "php",
        "Perl": "perl",
        "Properties": "properties",
        "Python": "python",
        "Ruby": "ruby",
        "SQL": "sql",
        "Shell": "shell",
        "Session": "session"
    };

    tinymce.create('tinymce.plugins.Highlight', {
        init: function (ed, url) {
            this.editor = ed;
        },

        createControl: function (n, cm) {
            var ed = this.editor;

            if (n === "highlight") {
                var list = cm.createListBox('highlight', {
                    title: 'Highlight',
                    onselect: function (value) {
                        var text = ed.selection.getContent();
                        var node = ed.selection.getNode();

                        ed.undoManager.add();

                        ed.selection.setContent('<code class="' + value + '">' + text + '</code>');
                        
                        if (node.nodeName !== "PRE") {
                            ed.formatter.apply('pre');
                        }

                        ed.undoManager.add();
                    }
                });

                tinymce.each(items, function (value, key) {
                    list.add(key, value);
                });

                return list;
            }

            return null;
        }
    });
    tinymce.PluginManager.add('highlight', tinymce.plugins.Highlight);
})();
