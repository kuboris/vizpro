!function(r){function n(r){return r}function e(r,n){for(var e=0,t=n.length,u=new Array(t);t>e;++e)u[e]=r[n[e]];return u}function t(r){function n(n,e,t,u){for(;u>t;){var f=t+u>>>1;r(n[f])<e?t=f+1:u=f}return t}function e(n,e,t,u){for(;u>t;){var f=t+u>>>1;e<r(n[f])?u=f:t=f+1}return t}return e.right=e,e.left=n,e}function u(r){function n(r,n,e){for(var u=e-n,f=(u>>>1)+1;--f>0;)t(r,f,u,n);return r}function e(r,n,e){for(var u,f=e-n;--f>0;)u=r[n],r[n]=r[n+f],r[n+f]=u,t(r,1,f,n);return r}function t(n,e,t,u){for(var f,o=n[--u+e],i=r(o);(f=e<<1)<=t&&(t>f&&r(n[u+f])>r(n[u+f+1])&&f++,!(i<=r(n[u+f])));)n[u+e]=n[u+f],e=f;n[u+e]=o}return n.sort=e,n}function f(r){function n(n,t,u,f){var o,i,a,c,l=new Array(f=Math.min(u-t,f));for(i=0;f>i;++i)l[i]=n[t++];if(e(l,0,f),u>t){o=r(l[0]);do(a=r(c=n[t])>o)&&(l[0]=c,o=r(e(l,0,f)[0]));while(++t<u)}return l}var e=u(r);return n}function o(r){function n(n,e,t){for(var u=e+1;t>u;++u){for(var f=u,o=n[u],i=r(o);f>e&&r(n[f-1])>i;--f)n[f]=n[f-1];n[f]=o}return n}return n}function i(r){function n(r,n,u){return(N>u-n?t:e)(r,n,u)}function e(e,t,u){var f,o=(u-t)/6|0,i=t+o,a=u-1-o,c=t+u-1>>1,l=c-o,v=c+o,s=e[i],h=r(s),d=e[l],p=r(d),g=e[c],y=r(g),m=e[v],w=r(m),x=e[a],b=r(x);h>p&&(f=s,s=d,d=f,f=h,h=p,p=f),w>b&&(f=m,m=x,x=f,f=w,w=b,b=f),h>y&&(f=s,s=g,g=f,f=h,h=y,y=f),p>y&&(f=d,d=g,g=f,f=p,p=y,y=f),h>w&&(f=s,s=m,m=f,f=h,h=w,w=f),y>w&&(f=g,g=m,m=f,f=y,y=w,w=f),p>b&&(f=d,d=x,x=f,f=p,p=b,b=f),p>y&&(f=d,d=g,g=f,f=p,p=y,y=f),w>b&&(f=m,m=x,x=f,f=w,w=b,b=f);var A=d,k=p,O=m,E=w;e[i]=s,e[l]=e[t],e[c]=g,e[v]=e[u-1],e[a]=x;var M=t+1,U=u-2,z=E>=k&&k>=E;if(z)for(var N=M;U>=N;++N){var C=e[N],S=r(C);if(k>S)N!==M&&(e[N]=e[M],e[M]=C),++M;else if(S>k)for(;;){var q=r(e[U]);{if(!(q>k)){if(k>q){e[N]=e[M],e[M++]=e[U],e[U--]=C;break}e[N]=e[U],e[U--]=C;break}U--}}}else for(var N=M;U>=N;N++){var C=e[N],S=r(C);if(k>S)N!==M&&(e[N]=e[M],e[M]=C),++M;else if(S>E)for(;;){var q=r(e[U]);{if(!(q>E)){k>q?(e[N]=e[M],e[M++]=e[U],e[U--]=C):(e[N]=e[U],e[U--]=C);break}if(U--,N>U)break}}}if(e[t]=e[M-1],e[M-1]=A,e[u-1]=e[U+1],e[U+1]=O,n(e,t,M-1),n(e,U+2,u),z)return e;if(i>M&&U>a){for(var F,q;(F=r(e[M]))<=k&&F>=k;)++M;for(;(q=r(e[U]))<=E&&q>=E;)--U;for(var N=M;U>=N;N++){var C=e[N],S=r(C);if(k>=S&&S>=k)N!==M&&(e[N]=e[M],e[M]=C),M++;else if(E>=S&&S>=E)for(;;){var q=r(e[U]);{if(!(E>=q&&q>=E)){k>q?(e[N]=e[M],e[M++]=e[U],e[U--]=C):(e[N]=e[U],e[U--]=C);break}if(U--,N>U)break}}}}return n(e,M,U+1)}var t=o(r);return n}function a(r){for(var n=new Array(r),e=-1;++e<r;)n[e]=0;return n}function c(r,n){for(var e=r.length;n>e;)r[e++]=0;return r}function l(r,n){if(n>32)throw new Error("invalid array width!");return r}function v(r,n){return function(e){var t=e.length;return[r.left(e,n,0,t),r.right(e,n,0,t)]}}function s(r,n){var e=n[0],t=n[1];return function(n){var u=n.length;return[r.left(n,e,0,u),r.left(n,t,0,u)]}}function h(r){return[0,r.length]}function d(){return null}function p(){return 0}function g(r){return r+1}function y(r){return r-1}function m(r){return function(n,e){return n+ +r(e)}}function w(r){return function(n,e){return n-r(e)}}function x(){function r(r){var n=E,e=r.length;return e&&(x=x.concat(r),z=F(z,E+=e),S.forEach(function(t){t(r,n,e)})),l}function t(){for(var r=b(E,E),n=[],e=0,t=0;E>e;++e)z[e]?r[e]=t++:n.push(e);N.forEach(function(r){r(0,[],n)}),q.forEach(function(n){n(r)});for(var u,e=0,t=0;E>e;++e)(u=z[e])&&(e!==t&&(z[t]=u,x[t]=x[e]),++t);for(x.length=t;E>t;)z[--E]=0}function o(r){function t(n,t,u){T=n.map(r),V=$(A(u),0,u),T=e(T,V);var f,o=_(T),i=o[0],a=o[1];if(W)for(f=0;u>f;++f)W(T[f],f)||(z[V[f]+t]|=Y);else{for(f=0;i>f;++f)z[V[f]+t]|=Y;for(f=a;u>f;++f)z[V[f]+t]|=Y}if(!t)return P=T,Q=V,er=i,void(tr=a);var c=P,l=Q,v=0,s=0;for(P=new Array(E),Q=b(E,E),f=0;t>v&&u>s;++f)c[v]<T[s]?(P[f]=c[v],Q[f]=l[v++]):(P[f]=T[s],Q[f]=V[s++]+t);for(;t>v;++v,++f)P[f]=c[v],Q[f]=l[v];for(;u>s;++s,++f)P[f]=T[s],Q[f]=V[s]+t;o=_(P),er=o[0],tr=o[1]}function o(r,n,e){rr.forEach(function(r){r(T,V,n,e)}),T=V=null}function a(r){for(var n,e=0,t=0;E>e;++e)z[n=Q[e]]&&(e!==t&&(P[t]=P[e]),Q[t]=r[n],++t);for(P.length=t;E>t;)Q[t++]=0;var u=_(P);er=u[0],tr=u[1]}function c(r){var n=r[0],e=r[1];if(W)return W=null,G(function(r,t){return t>=n&&e>t}),er=n,tr=e,X;var t,u,f,o=[],i=[];if(er>n)for(t=n,u=Math.min(er,e);u>t;++t)z[f=Q[t]]^=Y,o.push(f);else if(n>er)for(t=er,u=Math.min(n,tr);u>t;++t)z[f=Q[t]]^=Y,i.push(f);if(e>tr)for(t=Math.max(n,tr),u=e;u>t;++t)z[f=Q[t]]^=Y,o.push(f);else if(tr>e)for(t=Math.max(er,e),u=tr;u>t;++t)z[f=Q[t]]^=Y,i.push(f);return er=n,tr=e,N.forEach(function(r){r(Y,o,i)}),X}function l(r){return null==r?B():Array.isArray(r)?j(r):"function"==typeof r?D(r):C(r)}function C(r){return c((_=v(O,r))(P))}function j(r){return c((_=s(O,r))(P))}function B(){return c((_=h)(P))}function D(r){return _=h,G(W=r),er=0,tr=E,X}function G(r){var n,e,t,u=[],f=[];for(n=0;E>n;++n)!(z[e=Q[n]]&Y)^!!(t=r(P[n],n))&&(t?(z[e]&=Z,u.push(e)):(z[e]|=Y,f.push(e)));N.forEach(function(r){r(Y,u,f)})}function H(r){for(var n,e=[],t=tr;--t>=er&&r>0;)z[n=Q[t]]||(e.push(x[n]),--r);return e}function I(r){for(var n,e=[],t=er;tr>t&&r>0;)z[n=Q[t]]||(e.push(x[n]),--r),t++;return e}function J(r){function e(n,e,t,u){function f(){++T===L&&(m=R(m,K<<=1),B=R(B,K),L=k(K))}var l,v,s,h,p,g,y=j,m=b(T,L),w=H,A=J,O=T,M=0,U=0;for(X&&(w=A=d),j=new Array(T),T=0,B=O>1?F(B,E):b(E,L),O&&(s=(v=y[0]).key);u>U&&!((h=r(n[U]))>=h);)++U;for(;u>U;){for(v&&h>=s?(p=v,g=s,m[M]=T,(v=y[++M])&&(s=v.key)):(p={key:h,value:A()},g=h),j[T]=p;!(h>g||(B[l=e[U]+t]=T,z[l]&Z||(p.value=w(p.value,x[l])),++U>=u));)h=r(n[U]);f()}for(;O>M;)j[m[M]=T]=y[M++],f();if(T>M)for(M=0;t>M;++M)B[M]=m[B[M]];l=N.indexOf(V),T>1?(V=o,W=a):(!T&&$&&(T=1,j=[{key:null,value:A()}]),1===T?(V=i,W=c):(V=d,W=d),B=null),N[l]=V}function t(){if(T>1){for(var r=T,n=j,e=b(r,r),t=0,u=0;E>t;++t)z[t]&&(e[B[u]=B[t]]=1,++u);for(j=[],T=0,t=0;r>t;++t)e[t]&&(e[t]=T++,j.push(n[t]));if(T>1)for(var t=0;u>t;++t)B[t]=e[B[t]];else B=null;N[N.indexOf(V)]=T>1?(W=a,V=o):1===T?(W=c,V=i):W=V=d}else if(1===T){if($)return;for(var t=0;E>t;++t)if(z[t])return;j=[],T=0,N[N.indexOf(V)]=V=W=d}}function o(r,n,e){if(r!==Y&&!X){var t,u,f,o;for(t=0,f=n.length;f>t;++t)z[u=n[t]]&Z||(o=j[B[u]],o.value=H(o.value,x[u]));for(t=0,f=e.length;f>t;++t)(z[u=e[t]]&Z)===r&&(o=j[B[u]],o.value=I(o.value,x[u]))}}function i(r,n,e){if(r!==Y&&!X){var t,u,f,o=j[0];for(t=0,f=n.length;f>t;++t)z[u=n[t]]&Z||(o.value=H(o.value,x[u]));for(t=0,f=e.length;f>t;++t)(z[u=e[t]]&Z)===r&&(o.value=I(o.value,x[u]))}}function a(){var r,n;for(r=0;T>r;++r)j[r].value=J();for(r=0;E>r;++r)z[r]&Z||(n=j[B[r]],n.value=H(n.value,x[r]))}function c(){var r,n=j[0];for(n.value=J(),r=0;E>r;++r)z[r]&Z||(n.value=H(n.value,x[r]))}function l(){return X&&(W(),X=!1),j}function v(r){var n=D(l(),0,j.length,r);return G.sort(n,0,n.length)}function s(r,n,e){return H=r,I=n,J=e,X=!0,S}function h(){return s(g,y,p)}function A(r){return s(m(r),w(r),p)}function O(r){function n(n){return r(n.value)}return D=f(n),G=u(n),S}function M(){return O(n)}function U(){return T}function C(){var r=N.indexOf(V);return r>=0&&N.splice(r,1),r=rr.indexOf(e),r>=0&&rr.splice(r,1),r=q.indexOf(t),r>=0&&q.splice(r,1),S}var S={top:v,all:l,reduce:s,reduceCount:h,reduceSum:A,order:O,orderNatural:M,size:U,dispose:C,remove:C};nr.push(S);var j,B,D,G,H,I,J,K=8,L=k(K),T=0,V=d,W=d,X=!0,$=r===d;return arguments.length<1&&(r=n),N.push(V),rr.push(e),q.push(t),e(P,Q,0,E),h().orderNatural()}function K(){var r=J(d),n=r.all;return delete r.all,delete r.top,delete r.order,delete r.orderNatural,delete r.size,r.value=function(){return n()[0].value},r}function L(){nr.forEach(function(r){r.dispose()});var r=S.indexOf(t);return r>=0&&S.splice(r,1),r=S.indexOf(o),r>=0&&S.splice(r,1),r=q.indexOf(a),r>=0&&q.splice(r,1),M&=Z,B()}var P,Q,T,V,W,X={filter:l,filterExact:C,filterRange:j,filterFunction:D,filterAll:B,top:H,bottom:I,group:J,groupAll:K,dispose:L,remove:L},Y=~M&-~M,Z=~Y,$=i(function(r){return T[r]}),_=h,rr=[],nr=[],er=0,tr=0;return S.unshift(t),S.push(o),q.push(a),M|=Y,(U>=32?!Y:M&-(1<<U))&&(z=R(z,U<<=1)),t(x,0,E),o(x,0,E),X}function a(){function r(r,n){var e;if(!h)for(e=n;E>e;++e)z[e]||(a=c(a,x[e]))}function n(r,n,e){var t,u,f;if(!h){for(t=0,f=n.length;f>t;++t)z[u=n[t]]||(a=c(a,x[u]));for(t=0,f=e.length;f>t;++t)z[u=e[t]]===r&&(a=l(a,x[u]))}}function e(){var r;for(a=v(),r=0;E>r;++r)z[r]||(a=c(a,x[r]))}function t(r,n,e){return c=r,l=n,v=e,h=!0,s}function u(){return t(g,y,p)}function f(r){return t(m(r),w(r),p)}function o(){return h&&(e(),h=!1),a}function i(){var e=N.indexOf(n);return e>=0&&N.splice(e),e=S.indexOf(r),e>=0&&S.splice(e),s}var a,c,l,v,s={reduce:t,reduceCount:u,reduceSum:f,value:o,dispose:i,remove:i},h=!0;return N.push(n),S.push(r),r(x,0,E),u()}function c(){return E}var l={add:r,remove:t,dimension:o,groupAll:a,size:c},x=[],E=0,M=0,U=8,z=C(0),N=[],S=[],q=[];return arguments.length?r(arguments[0]):l}function b(r,n){return(257>n?C:65537>n?S:q)(r)}function A(r){for(var n=b(r,r),e=-1;++e<r;)n[e]=e;return n}function k(r){return 8===r?256:16===r?65536:4294967296}x.version="1.3.12",x.permute=e;var O=x.bisect=t(n);O.by=t;var E=x.heap=u(n);E.by=u;var M=x.heapselect=f(n);M.by=f;var U=x.insertionsort=o(n);U.by=o;var z=x.quicksort=i(n);z.by=i;var N=32,C=a,S=a,q=a,F=c,R=l;"undefined"!=typeof Uint8Array&&(C=function(r){return new Uint8Array(r)},S=function(r){return new Uint16Array(r)},q=function(r){return new Uint32Array(r)},F=function(r,n){if(r.length>=n)return r;var e=new r.constructor(n);return e.set(r),e},R=function(r,n){var e;switch(n){case 16:e=S(r.length);break;case 32:e=q(r.length);break;default:throw new Error("invalid array width!")}return e.set(r),e}),r.crossfilter=x}("undefined"!=typeof exports&&exports||this);