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

            ed.onInit.add(function () {
                ed.formatter.register('code_highlight', {
                    inline: 'code',
                    onformat: function (elm, fmt, vars) {
                        ed.dom.addClass(elm, vars);

                        if (elm.parentNode !== "PRE") {
                            ed.formatter.apply('pre');
                        }
                    }
                });
            });

            this.editor = ed;
        },

        createControl: function (n, cm) {
            var ed = this.editor;

            if (n === "highlight") {
                var list = cm.createListBox('highlight', {
                    title: 'Highlight',
                    onselect: function (value) {
                        ed.formatter.apply('code_highlight', value);
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
