if ( ! window.console ) {

    (function() {
      var names = ["log", "debug", "info", "warn", "error",
          "assert", "dir", "dirxml", "group", "groupEnd", "time",
          "timeEnd", "count", "trace", "profile", "profileEnd"],
          i, l = names.length;

      window.console = {};

      for ( i = 0; i < l; i++ ) {
        window.console[ names[i] ] = function() {};
      }
    }());

}

function formatDateTime(d) {
	return d?(new Date(d).toString('yyyy-MM-dd HH:mm:ss')) : '';
};

function formatDate(d) {
	return d?(new Date(d).toString('yyyy-MM-dd')) : '';
};

if (window.ko) {
	ko.bindingHandlers.datepicker = {
		    init: function(element, valueAccessor, allBindingsAccessor) {
		        //initialize datepicker with some optional options
		        var options = allBindingsAccessor().datepickerOptions || {};
		        $(element).datepicker(options);

		        //handle the field changing
		        ko.utils.registerEventHandler(element, "change", function() {
		            var observable = valueAccessor();
		            observable($(element).datepicker("getDate"));
		        });

		        //handle disposal (if KO removes by the template binding)
		        ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
		            $(element).datepicker("destroy");
		        });

		    },
		    update: function(element, valueAccessor) {
		        var value = ko.utils.unwrapObservable(valueAccessor()),
		            current = $(element).datepicker("getDate");
		        
		        if (value - current !== 0) {
		            $(element).datepicker("setDate", value);   
		        }
		    }
		};
	ko.bindingHandlers.datetimepicker = {
		    init: function(element, valueAccessor, allBindingsAccessor) {
		        //initialize datepicker with some optional options
		        var options = allBindingsAccessor().datepickerOptions || {};
		        $(element).datetimepicker(options);

		        //handle the field changing
		        ko.utils.registerEventHandler(element, "change", function() {
		            var observable = valueAccessor();
		            observable($(element).datetimepicker("getDate"));
		        });

		        //handle disposal (if KO removes by the template binding)
		        ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
		            $(element).datetimepicker("destroy");
		        });

		    },
		    update: function(element, valueAccessor) {
		        var value = ko.utils.unwrapObservable(valueAccessor()),
		            current = $(element).datetimepicker("getDate");
		        
		        if (value - current !== 0) {
		            $(element).datetimepicker("setDate", value);   
		        }
		    }
		};
}