import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
declare global { interface Window { dataLayer?:unknown[]; gtag?:(...args:unknown[])=>void } }
const gaId=import.meta.env.VITE_GA_MEASUREMENT_ID as string|undefined;
const clarityId=import.meta.env.VITE_CLARITY_PROJECT_ID as string|undefined;
export function Analytics(){const {pathname,search}=useLocation();useEffect(()=>{if(!gaId)return;const script=document.createElement('script');script.async=true;script.src=`https://www.googletagmanager.com/gtag/js?id=${gaId}`;document.head.append(script);window.dataLayer=window.dataLayer||[];window.gtag=(...args)=>window.dataLayer?.push(args);window.gtag('js',new Date());window.gtag('config',gaId,{anonymize_ip:true});return()=>script.remove()},[]);useEffect(()=>{if(gaId)window.gtag?.('event','page_view',{page_path:`${pathname}${search}`})},[pathname,search]);useEffect(()=>{if(!clarityId)return;const script=document.createElement('script');script.async=true;script.src=`https://www.clarity.ms/tag/${clarityId}`;document.head.append(script);return()=>script.remove()},[]);return null}
