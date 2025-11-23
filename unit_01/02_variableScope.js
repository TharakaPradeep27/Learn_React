function testScope(){
    var v1 = 10;
    let l1 = 20 ;
    const c1 = 30;

    {
        var v2 = 100;
        let l2 = 200;
        const c2 = 300;
    }

    console.log(v1);
    console.log(l1);
    console.log(c1);
    console.log(v2);  //block eken pitatha unath access karanna puluwn. habai function eken eliye ba.
    //console.log(l2);
    //console.log(c2);
}

testScope();