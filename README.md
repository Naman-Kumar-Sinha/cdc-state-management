# Cross Domain Cookie State Management

> TIP #1: *Use ngrok to tunnel your localhost port 80.* 

> TIP #2: *To get the client code, check this [snippet](https://www.w3schools.com/code/tryit.asp?filename=FOAYKLXL9AAW) or scroll all the way to the bottom.*

## Functions

<dl>
<dt><a href="#checkResource">checkResource(req, res, next)</a></dt>
<dd><p>Check API resource and skip first middleware for specific resource</p>
</dd>
<dt><a href="#specificCors">specificCors(req, res, next)</a></dt>
<dd><p>Sets Specific CORS Reponse headers</p>
</dd>
<dt><a href="#genCors">genCors(req, res, next)</a></dt>
<dd><p>Sets General CORS Response headers</p>
</dd>
</dl>

<a name="checkResource"></a>

## checkResource(req, res, next)
Check API resource and skip first middleware for specific resource

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>\*</code> | HTTP Request object |
| res | <code>\*</code> | HTTP Response object |
| next | <code>\*</code> | Method executes next middleware |

<a name="specificCors"></a>

## specificCors(req, res, next)
Sets Specific CORS Reponse headers

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>\*</code> | HTTP Request object |
| res | <code>\*</code> | HTTP Response object |
| next | <code>\*</code> | Method executes next middleware |

<a name="genCors"></a>

## genCors(req, res, next)
Sets General CORS Response headers

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>\*</code> | HTTP Request object |
| res | <code>\*</code> | HTTP Response object |
| next | <code>\*</code> | Method executes next middleware |

## Client-side AJAX Request Snippet
Put this in your HTML and you are good to go. Make sure you've a `demo` element in your HTML code to render the contents.
```
<script>
    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "https://cdc-state-management.herokuapp.com/api/cookies", true);
        /*If you are looking for cookies from cross-domain then xhttp.withCredentials is mandatory.
        */
        xhttp.withCredentials = true;
        xhttp.send();
    }
</script>
```

## LICENSE
[MIT License](https://github.com/Naman-Kumar-Sinha/cdc-state-management/blob/master/LICENSE)